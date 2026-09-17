import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://matheus-almeida-gomes.mc-designer027.chatgpt.site"),
  title: "Matheus Almeida Gomes | Engenheiro de Software Full-Stack",
  description: "Portfólio de Matheus Almeida Gomes. Engenharia de software, SaaS multi-tenant, IA aplicada e infraestrutura de produção.",
  alternates: { canonical: "/" },
  openGraph: { title: "Matheus Almeida Gomes | Engenheiro de Software Full-Stack", description: "Engenharia de software, SaaS multi-tenant, IA aplicada e infraestrutura de produção.", locale: "pt_BR", type: "website" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
