import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Zapost — Estudo de caso | Matheus Almeida Gomes",
  description: "O problema, o fluxo do produto e as decisões de engenharia por trás do Zapost, com evidências públicas e limites claros.",
  alternates: { canonical: "/projetos/zapost" },
  openGraph: {
    title: "Zapost — Estudo de caso | Matheus Almeida Gomes",
    description: "Do tema à revisão e exportação: produto, arquitetura e decisões de engenharia do Zapost.",
  },
};

const decisions = [
  {
    number: "01",
    title: "Tirar a geração do ciclo da requisição",
    context: "Pesquisa, geração de texto e composição visual dependem de serviços externos e podem demorar ou falhar.",
    choice: "A aplicação encaminha tarefas intensivas a workers com BullMQ e Redis. A interface acompanha o estado do trabalho.",
    tradeoff: "Isso exige lidar com estados de espera, falha e retentativa, além de operar o worker e o Redis.",
    effect: "A requisição inicial pode responder sem executar todo o processamento de IA no mesmo ciclo HTTP. Não há medição pública de latência.",
  },
  {
    number: "02",
    title: "Manter a revisão nas mãos do usuário",
    context: "Uma geração automática ainda precisa respeitar a marca e permitir correções antes da publicação.",
    choice: "O editor no navegador permite ajustar o carrossel, voltar etapas com Undo/Redo e exportar em formatos raster, SVG e PDF.",
    tradeoff: "O estado de edição e a exportação em vários formatos aumentam a complexidade do cliente.",
    effect: "O fluxo termina com uma peça que pode ser revisada e alterada, em vez de exigir a publicação direta da saída da IA.",
  },
];

export default function ZapostCaseStudy() {
  return <>
    <header className="site-header case-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Matheus Almeida Gomes, início"><span className="brand-mark">M<span>.</span></span><span>Matheus Almeida Gomes</span></Link>
        <Link className="back-link" href="/#projetos"><ArrowLeft size={17} aria-hidden="true" /> Voltar aos projetos</Link>
      </div>
    </header>
    <main>
      <section className="case-hero">
        <div className="shell">
          <div className="case-breadcrumb"><Link href="/">Início</Link><span>/</span><Link href="/#projetos">Projetos</Link><span>/</span><strong>Zapost</strong></div>
          <div className="case-hero-grid">
            <div>
              <p className="eyebrow small">ESTUDO DE CASO / 01 · 2025 — ATUAL</p>
              <h1>Zapost<span>.</span></h1>
              <p className="case-lead">Um fluxo para pesquisar, criar, revisar e exportar conteúdo visual com a identidade de cada marca.</p>
              <div className="case-actions">
                <a className="button button-lime" href="https://lp.zapost.com.br/" target="_blank" rel="noopener noreferrer">Site do Zapost <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a className="case-secondary" href="https://github.com/matheuszalax/zapost-portfolio-pt" target="_blank" rel="noopener noreferrer">Documentação técnica <ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
            </div>
            <aside className="case-facts" aria-label="Contexto do projeto">
              <div><span>CONTEXTO</span><strong>Projeto próprio em produção desde 2025</strong></div>
              <div><span>RESPONSABILIDADE</span><strong>Produto, aplicação, arquitetura e operação</strong></div>
              <div><span>BASE TÉCNICA</span><strong>Next.js · TypeScript · PostgreSQL · Redis · Docker</strong></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="case-intro section" aria-labelledby="problem-title">
        <div className="shell case-text-grid">
          <p className="eyebrow small">O PROBLEMA E O FLUXO</p>
          <div>
            <h2 id="problem-title">Menos etapas soltas entre uma ideia e uma peça editável.</h2>
            <p>Para criar um carrossel, é comum pesquisar o tema, escrever o conteúdo, montar os slides e ajustar cores, fontes e imagens em etapas separadas. O Zapost reúne essas tarefas e preserva uma etapa de revisão humana.</p>
            <div className="flow-comparison">
              <div><span>PROCESSO FRAGMENTADO</span><strong>Pesquisa → texto → montagem → ajustes de marca</strong><p>Cada etapa exige transportar conteúdo e conferir a consistência visual.</p></div>
              <div><span>FLUXO NO ZAPOST</span><strong>Tema e público → geração com marca → edição → exportação</strong><p>O usuário revisa textos e elementos no editor antes de obter o arquivo final.</p></div>
            </div>
            <p className="case-observation"><strong>Efeito observável:</strong> a apresentação pública do produto mostra a definição da identidade visual, a geração do carrossel e a edição antes da exportação. Não atribuo ganho de tempo ou escala sem dados auditáveis.</p>
          </div>
        </div>
      </section>

      <section className="case-pillars section" aria-labelledby="decisions-title">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow small">DECISÕES DE ENGENHARIA</p><h2 id="decisions-title">Escolhas e consequências<span className="accent-dot">.</span></h2></div><p>Dois problemas concretos por trás da experiência.</p></div>
          <div className="decision-grid">
            {decisions.map(decision => <article className="decision-card" key={decision.number}>
              <span className="decision-number">{decision.number}</span><h3>{decision.title}</h3>
              <dl>
                <div><dt>Contexto</dt><dd>{decision.context}</dd></div>
                <div><dt>Escolha</dt><dd>{decision.choice}</dd></div>
                <div><dt>Custo da escolha</dt><dd>{decision.tradeoff}</dd></div>
                <div><dt>Efeito</dt><dd>{decision.effect}</dd></div>
              </dl>
            </article>)}
          </div>
        </div>
      </section>

      <section className="case-architecture section" aria-labelledby="architecture-title">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow small">ARQUITETURA DOCUMENTADA</p><h2 id="architecture-title">Da borda aos dados<span className="accent-dot">.</span></h2></div><p>Mapa conceitual dos componentes; não representa um teste de integração.</p></div>
          <div className="system-map" role="img" aria-label="Usuário acessa Cloudflare, que encaminha ao Nginx na VPS e à aplicação Next.js. A aplicação usa PostgreSQL, Redis com workers e integrações externas de IA e pagamentos.">
            <div className="map-row"><div className="map-node"><small>ACESSO</small><strong>Usuário</strong><span>Navegador</span></div><div className="map-arrow" aria-hidden="true">→</div><div className="map-node"><small>BORDA</small><strong>Cloudflare</strong><span>Tunnel / proteção</span></div><div className="map-arrow" aria-hidden="true">→</div><div className="map-node"><small>VPS</small><strong>Nginx</strong><span>Proxy reverso / SSL</span></div><div className="map-arrow" aria-hidden="true">→</div><div className="map-node map-primary"><small>APLICAÇÃO</small><strong>Next.js</strong><span>UI, APIs e autenticação</span></div></div>
            <div className="map-branch" aria-hidden="true">↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓</div>
            <div className="map-row map-lower"><div className="map-node"><small>DADOS</small><strong>PostgreSQL</strong><span>Prisma / tenants</span></div><div className="map-node"><small>TAREFAS</small><strong>Redis + BullMQ</strong><span>Workers e filas</span></div><div className="map-node"><small>INTEGRAÇÕES</small><strong>IA + pagamentos</strong><span>LLMs / webhooks</span></div></div>
          </div>
          <p className="map-note">As amostras públicas documentam partes da solução. O diagrama não comprova isolamento de dados, segurança ou comportamento sob carga.</p>
        </div>
      </section>

      <section className="case-evidence section" aria-labelledby="evidence-title">
        <div className="shell case-text-grid">
          <p className="eyebrow small">EVIDÊNCIAS E LIMITES</p>
          <div>
            <h2 id="evidence-title">O que é possível conferir.</h2>
            <div className="evidence-list">
              <a href="https://lp.zapost.com.br/" target="_blank" rel="noopener noreferrer"><span>01 / PRODUTO</span><strong>Apresentação pública do fluxo e da interface</strong><ArrowUpRight size={20} aria-hidden="true" /></a>
              <a href="https://github.com/matheuszalax/zapost-portfolio-pt" target="_blank" rel="noopener noreferrer"><span>02 / DOCUMENTAÇÃO</span><strong>Arquitetura e amostras demonstrativas sanitizadas</strong><ArrowUpRight size={20} aria-hidden="true" /></a>
              <a href="https://github.com/matheuszalax/portfolio" target="_blank" rel="noopener noreferrer"><span>03 / ESTE SITE</span><strong>Código do portfólio e sua implementação web</strong><ArrowUpRight size={20} aria-hidden="true" /></a>
            </div>
            <div className="evidence-note"><h3>Limites desta apresentação</h3><p>O repositório do Zapost traz recortes demonstrativos, não o código completo de produção. A amostra de rate limiting usa uma decisão atômica em Lua e inclui teste de concorrência; isso não comprova a implementação privada. Métricas auditadas de uso e desempenho e histórico de colaboração ou revisão de código não estão documentados publicamente.</p></div>
          </div>
        </div>
      </section>

      <section className="case-end"><div className="shell"><p className="eyebrow small">CONTATO</p><h2>Quer conversar sobre as decisões?</h2><div><a className="button button-lime" href="mailto:matheuszalax@gmail.com">Falar com Matheus <ArrowUpRight size={18} aria-hidden="true" /></a><a className="case-secondary" href="/curriculo-matheus-almeida-gomes.pdf" download>Baixar currículo <Download size={17} aria-hidden="true" /></a></div></div></section>
    </main>
    <footer className="footer"><div className="shell footer-inner"><span>© {new Date().getFullYear()} Matheus Almeida Gomes</span><Link href="/">Voltar ao início <ExternalLink size={14} aria-hidden="true" /></Link></div></footer>
  </>;
}
