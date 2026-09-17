import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Almeida Gomes | Engenheiro de Software Full-Stack",
  description: "Portfólio de Matheus Almeida Gomes. Engenharia de software, SaaS multi-tenant, IA aplicada e infraestrutura de produção.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
