# Portfólio — Matheus Almeida Gomes

Site pessoal de Matheus Almeida Gomes, engenheiro de software full-stack. Reúne perfil profissional, stack de trabalho, contato e um estudo de caso do Zapost.

**Site publicado:** [matheus-almeida-gomes.mc-designer027.chatgpt.site](https://matheus-almeida-gomes.mc-designer027.chatgpt.site)

## Conteúdo

- Página inicial com apresentação, projeto em destaque, experiência e tecnologias.
- Estudo de caso do Zapost com decisões de arquitetura, fluxos de dados e operação.
- Currículo em PDF para download.

As informações profissionais vieram do currículo de Matheus. O estudo de caso descreve a arquitetura em nível conceitual; não divulga código proprietário nem métricas não verificadas.

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
