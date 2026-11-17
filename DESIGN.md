---
name: Chamados para Adorar
description: "Sinalização de chegada para uma igreja local."
colors:
  ultramarine: "#081d73"
  sky-panel: "#dce7ff"
  rose-seam: "#c51f50"
  wine-hover: "#8c143c"
  ink: "#10183f"
  warm-paper: "#faf9f6"
  white: "#fff"
  line: "#a7b5d8"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, 8.65vw, 9.25rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-.032em"
  display-tablet:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 9vw, 6.15rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-.032em"
  display-mobile:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.65rem, 13vw, 5.8rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-.032em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 5.2vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.99
    letterSpacing: "-.025em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.2rem, 4.1vw, 4rem)"
    fontWeight: 700
    lineHeight: 0.99
    letterSpacing: "-.025em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.08rem, 1.6vw, 1.38rem)"
    fontWeight: 400
    lineHeight: 1.45
  intro:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.12rem, 1.9vw, 1.65rem)"
    fontWeight: 400
    lineHeight: 1.45
  nav-label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 700
  sign-label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.85rem)"
    fontWeight: 700
    lineHeight: 1
  hours:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.45rem, 4.8vw, 4rem)"
    fontWeight: 800
    lineHeight: 1
rounded:
  square: "0"
  brand-mark: ".3rem"
  app-icon: "1.2rem"
  playback: "50%"
spacing:
  page-inset: "clamp(1.25rem, 6.5vw, 7rem)"
  section-block: "clamp(3.75rem, 8vw, 7rem)"
  section-column-gap: "clamp(2rem, 6vw, 6rem)"
components:
  sign-button:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ultramarine}"
    typography: "{typography.sign-label}"
    rounded: "{rounded.square}"
    padding: ".55rem 2.3rem .55rem 1.5rem"
  sign-button-hover:
    backgroundColor: "{colors.sky-panel}"
  text-link:
    textColor: "{colors.ultramarine}"
  text-link-hover:
    textColor: "{colors.wine-hover}"
  navigation:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-label}"
  arrival-sign:
    backgroundColor: "{colors.sky-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "1rem clamp(1.15rem, 4vw, 3.2rem)"
  schedule-hours:
    textColor: "{colors.ultramarine}"
    typography: "{typography.hours}"
  playback:
    backgroundColor: "{colors.ultramarine}"
    textColor: "{colors.white}"
    rounded: "{rounded.playback}"
    size: "clamp(3.15rem, 5.5vw, 5rem)"
  playback-hover:
    backgroundColor: "{colors.wine-hover}"
---

# Design System: Chamados para Adorar

## Overview

**Creative North Star: "Placa de chegada"**

A página usa a linguagem de uma placa para acolher quem chega: texto grande, setas com destinos claros e faixas de cor que organizam a leitura. A fotografia da própria igreja dá rosto ao convite.

O ultramarino emoldura os blocos de maior destaque. O papel quente, o branco e os filetes finos deixam as informações práticas respirarem. A diagonal rosa une cor e fotografia.

**Key Characteristics:**

- Títulos condensados, fortes e curtos.
- Painéis planos e recortes com função de sinalização.
- Fotografia da própria igreja com origem registrada em `SOURCES.md`.

## Colors

### Primary

- **Ultramarino:** painéis de destaque, texto dos botões de placa, links, horários e controle de reprodução.

### Secondary

- **Azul de sinalização:** faixa de endereço e fundo do ícone do aplicativo. Também serve de texto de apoio e contorno de foco no ultramarino.

### Tertiary

- **Rosa da junta:** emenda da fotografia, traço de seção, borda do rodapé e contorno de foco sobre fundo claro.
- **Vinho de interação:** estado de hover dos links sublinhados e do controle de reprodução.

### Neutral

- **Tinta:** texto sobre superfícies claras e fundo da capa de vídeo.
- **Papel quente e branco:** papel nas áreas de informação prática; branco na navegação, nas mensagens, nos botões e nos títulos sobre o ultramarino.
- **Filete azul:** separa informações próximas, como marca e nome, endereço e rota, dia e horário.

## Typography

**Display Font:** Barlow Condensed, com Arial Narrow e `sans-serif` de reserva.
**Body Font:** Barlow, com `system-ui` e `sans-serif` de reserva. Ambas as famílias são servidas localmente.

- **Display e Headline:** títulos em peso 800; abertura mais densa (`.82` de entrelinha), seções com um pouco mais de folga (`.99`).
- **Title e Sign Label:** peso 700 nos títulos internos e nas ações em forma de placa.
- **Body e Intro:** peso 400, entrelinha de 1.45 e largura de até `64ch`; a introdução tem escala própria.
- **Nav Label:** peso 700 em Barlow, com redução para `.93rem` no celular. Links no corpo também usam Barlow 700.
- **Hours:** Barlow Condensed 800 com números tabulares para alinhar os horários à direita das linhas.

## Layout

O miolo tem largura máxima de `86rem`, recuo lateral fluido e respiro vertical consistente entre seções. Visita, mensagem e aplicativo formam pares de colunas (`1.05fr / 1fr`). A abertura põe a fotografia à direita; a placa de endereço avança `2.6rem` sobre sua base.

- **Até `54rem`:** título da abertura reduzido, fotografia um pouco mais à direita e distribuição mais compacta na faixa de endereço.
- **Até `42rem`:** navegação abaixo da marca, fotografia abaixo do convite, colunas de conteúdo empilhadas. A junta permanece na borda superior da foto; a placa de endereço vira faixa reta em largura total.
- **Até `21rem`:** endereço e link do mapa empilham; o rótulo do Instagram permanece visível sem a seta.

## Elevation & Depth

As superfícies são planas, sem sombras. A profundidade vem do encaixe da faixa de endereço sobre a abertura, da fotografia recortada e dos contrastes entre os painéis. Na versão empilhada, as faixas se encontram pela cor e pelas linhas de corte.

## Shapes

Predominam cantos retos. A diagonal marca a emenda com a foto e o fundo do ícone do aplicativo; o recorte em ponta marca a placa e os botões. As curvas ficam no controle circular de reprodução e nos contornos dos ícones da igreja e do aplicativo.

## Components

### Buttons

A ação principal é uma placa branca com ponta à direita, texto ultramarino e seta alinhada ao rótulo. O botão tem altura mínima de `3.6rem`; a ponta pertence ao fundo, deixando o contorno de foco inteiro. No hover, o fundo passa a azul de sinalização e a seta avança. Setas externas inclinam para cima e à direita.

### Navigation

Marca à esquerda, separada do nome por um filete, com links em linha. Os links de navegação recebem sublinhado no hover. Os links do corpo mantêm o sublinhado desde o repouso e passam para vinho no hover. O foco tem contorno de `3px` e afastamento de `5px`, em rosa nas áreas claras e azul de sinalização nos painéis escuros. A preferência por movimento reduzido desliga as transições e a rolagem suave.

### Arrival Sign

Faixa azul de sinalização com chamada, endereço dividido por filetes e um link direto para o mapa. A ponta direita aparece na versão larga. Na estreita, a chamada ocupa a primeira linha e os filetes laterais saem para dar espaço ao endereço.

### Service Schedule

Lista de dias e horários com linha ultramarina no topo e filetes finos entre as linhas. Dia à esquerda, hora maior à direita.

### Message Cover

Imagem em 16:9 com controle circular de reprodução centralizado. O círculo passa de ultramarino para vinho no hover. O link da capa inteira leva à mensagem e tem nome acessível.

## Do's and Don'ts

### Do:

- **Do** manter o rótulo da ação legível junto à seta.
- **Do** usar a fotografia da própria igreja e preservar o assunto ao ajustar o recorte para cada tela.
- **Do** conferir o contorno de foco em áreas claras, escuras e recortadas.

### Don't:

- **Don't** aplicar sombra às placas ou aos blocos de informação.
- **Don't** arredondar os painéis ou substituir os recortes de sinalização por cápsulas.
