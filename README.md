# Portfólio — Matheus Almeida Gomes

Site pessoal com apresentação, contato e estudo de caso do Zapost. O projeto usa Next.js, React, TypeScript e CSS próprio. As informações do estudo de caso distinguem decisões documentadas de resultados ainda não medidos publicamente.

## Desenvolvimento

Requer Node.js 22 ou superior.

```bash
npm ci
npm run dev
```

## Build estático

```bash
npm run build
```

O Next.js exporta o site para `out/`. Para publicar no Cloudflare Pages, configure o comando de build como `npm run build` e o diretório de saída como `out`. O site não precisa de variáveis de ambiente, banco de dados ou runtime de servidor.

## Estrutura

- `app/page.tsx`: página inicial.
- `app/projetos/zapost/page.tsx`: estudo de caso.
- `app/globals.css`: identidade visual e responsividade.
- `public/`: favicon e currículo para download.

O código do portfólio demonstra a implementação desta interface. A documentação técnica do Zapost está no [repositório de arquitetura](https://github.com/matheuszalax/zapost-portfolio-pt).
