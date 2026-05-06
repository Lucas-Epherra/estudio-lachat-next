export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#metodo" },
  { label: "El estudio", href: "#el-estudio" },
  { label: "Dudas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
] as const satisfies readonly NavItem[];