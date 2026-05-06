import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cachedSupabaseClient: SupabaseClient | null = null;

/**
 * Retorna un cliente público de Supabase para operaciones permitidas por RLS.
 *
 * La instancia se crea de forma lazy para evitar errores durante el prerender
 * de Next.js cuando el módulo es evaluado antes de interactuar con el formulario.
 */
export function getSupabaseClient(): SupabaseClient {
  if (cachedSupabaseClient) {
    return cachedSupabaseClient;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing Supabase environment variables. Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }

  cachedSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

  return cachedSupabaseClient;
}