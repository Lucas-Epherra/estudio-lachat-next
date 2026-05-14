import { createClient } from "@supabase/supabase-js";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type HealthResponse = {
  ok: boolean;
  checkedAt?: string;
  error?: string;
};

const HEARTBEAT_ID = "estudio-lachat-production";

/**
 * Obtiene una variable de entorno requerida.
 * Acepta múltiples nombres para reutilizar la URL pública de Supabase si ya existe.
 */
function getRequiredEnv(keys: string[]): string {
  const value = keys.map((key) => process.env[key]).find(Boolean);

  if (!value) {
    throw new Error(`Missing required environment variable: ${keys.join(" or ")}`);
  }

  return value;
}

/**
 * Valida que la request venga desde Vercel Cron.
 * Vercel envía automáticamente el header Authorization usando CRON_SECRET.
 */
function validateCronRequest(request: NextRequest): Response | null {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return Response.json(
      {
        ok: false,
        error: "Missing CRON_SECRET environment variable",
      } satisfies HealthResponse,
      { status: 500 },
    );
  }

  const authorizationHeader = request.headers.get("authorization");

  if (authorizationHeader !== `Bearer ${cronSecret}`) {
    return Response.json(
      {
        ok: false,
        error: "Unauthorized",
      } satisfies HealthResponse,
      { status: 401 },
    );
  }

  return null;
}

/**
 * Healthcheck server-side para mantener actividad mínima en Supabase.
 * No expone datos sensibles y usa una operación idempotente sobre una tabla interna.
 */
export async function GET(request: NextRequest): Promise<Response> {
  const unauthorizedResponse = validateCronRequest(request);

  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  try {
    const supabaseUrl = getRequiredEnv(["SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_URL"]);
    const supabaseServiceRoleKey = getRequiredEnv(["SUPABASE_SERVICE_ROLE_KEY"]);

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const checkedAt = new Date().toISOString();

    const { error } = await supabaseAdmin.from("system_heartbeat").upsert(
      {
        id: HEARTBEAT_ID,
        last_checked_at: checkedAt,
        source: "vercel-cron",
        updated_at: checkedAt,
      },
      {
        onConflict: "id",
      },
    );

    if (error) {
      return Response.json(
        {
          ok: false,
          error: error.message,
        } satisfies HealthResponse,
        { status: 500 },
      );
    }

    return Response.json(
      {
        ok: true,
        checkedAt,
      } satisfies HealthResponse,
      { status: 200 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return Response.json(
      {
        ok: false,
        error: message,
      } satisfies HealthResponse,
      { status: 500 },
    );
  }
}