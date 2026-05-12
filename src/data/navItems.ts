export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#metodo" },
  { label: "Consulta Online", href: "#contacto" },
  { label: "El estudio", href: "#el-estudio" },
  { label: "Preguntas", href: "#faq" },
] as const satisfies readonly NavItem[];