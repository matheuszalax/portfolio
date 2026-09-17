# Portfólio — Matheus Almeida Gomes

Site pessoal de Matheus Almeida Gomes, engenheiro de software full-stack. Reúne perfil profissional, stack de trabalho, contato e um estudo de caso do Zapost.

**Site publicado:** [portfolio.zalax.com.br](https://portfolio.zalax.com.br)

## Conteúdo

- Página inicial com apresentação, projeto em destaque, experiência e tecnologias.
- Estudo de caso do Zapost com problema, fluxo do produto, decisões e limites das evidências públicas.
- Currículo atualizado em PDF para download.

As informações profissionais vieram do currículo de Matheus. O estudo de caso descreve a arquitetura em nível conceitual; as amostras do Zapost são demonstrativas e não validam o sistema completo. O site não atribui métricas de uso ou desempenho sem dados auditáveis.

## Tecnologia

- Next.js (App Router) com Vinext e React
- TypeScript
- CSS responsivo e Tailwind CSS
- Ícones Lucide
- Exportação estática para hospedagem no Sites

## Desenvolvimento local

Requer Node.js 22 ou superior.

```bash
npm ci
npm run dev
```

O endereço local é mostrado no terminal. Para gerar a versão de produção:

```bash
npm run build
```

A saída estática fica em `dist/client`. Nenhuma chave de API é necessária para executar o portfólio.

## Estrutura

- `app/page.tsx`: página inicial.
- `app/projetos/zapost/page.tsx`: estudo de caso.
- `app/globals.css`: identidade visual, componentes e responsividade.
- `public/`: favicon e currículo.

## Acessibilidade

O site usa títulos semânticos, descrições para diagramas, estados de foco visíveis, contraste alto e respeito à preferência por movimento reduzido.

## Contato

- [LinkedIn](https://www.linkedin.com/in/matheus-almeida-gomes-dev/)
- [GitHub](https://github.com/matheuszalax)
- [E-mail](mailto:matheuszalax@gmail.com)
