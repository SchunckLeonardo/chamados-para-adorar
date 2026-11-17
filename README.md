# Chamados para Adorar

Landing page da Igreja Evangélica Cristã Chamados para Adorar, em Embu-Guaçu (SP).

- [Site público](https://schunckleonardo.github.io/chamados-para-adorar/)
- [Versões no GitHub](https://github.com/SchunckLeonardo/chamados-para-adorar/releases)

## Rodar no computador

Use Node.js 22 ou superior.

```sh
npm ci
npm run dev
```

Abra [localhost:3000](http://localhost:3000). Para validar a exportação estática, execute `npm run build`. A saída fica em `out/`.

## Manter o site

- Atualize os dados em `app/page.js` e as respectivas referências em [SOURCES.md](SOURCES.md).
- A automação do GitHub Actions publica alterações da landing page na branch `main`. A publicação também pode ser executada manualmente na aba **Actions**.
- Depois de conferir a versão pública, registre versões com uma tag `vMAJOR.MINOR.PATCH` e uma release no GitHub.
- Para pedir uma avaliação de melhorias, abra o projeto no Codex e peça ao Fiel Revisor para revisar o site. A persona e o formato de entrega estão no [AGENTS.md](AGENTS.md).
