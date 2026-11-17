import "@fontsource/barlow/latin-400.css";
import "@fontsource/barlow/latin-600.css";
import "@fontsource/barlow/latin-700.css";
import "@fontsource/barlow-condensed/latin-700.css";
import "@fontsource/barlow-condensed/latin-800.css";
import "@fontsource/baskervville/latin-400.css";
import "@fontsource/baskervville/latin-400-italic.css";
import "./globals.css";

const description =
  "Celebre os 9 anos da Igreja Chamados para Adorar em Embu-Guaçu. Dias 21 e 22 de novembro de 2026, com Helder Pinheiro e Tainá Lima.";

const direction = `<!--
THESIS: o aniversário de 9 anos convida a comunidade a celebrar nos dias 21 e 22 de novembro.
OWN-WORLD: creme, vinho e dourado da divulgação oficial, serifas de convite e faixas diagonais.
STORY: reconhecer o aniversário, consultar os dois encontros e abrir a rota para a igreja.
FIRST VIEWPORT: o marco de 9 anos à esquerda, tema e convite à direita, programação na base.
FORM: campanha de aniversário solicitada pelo responsável, adaptação da direção f3b0c067.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export const metadata = {
  title: "9 anos | Igreja Chamados para Adorar",
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "9 anos da Igreja Chamados para Adorar",
    description,
  },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/media/chama.webp` },
};

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <template dangerouslySetInnerHTML={{ __html: direction }} />
        {children}
      </body>
    </html>
  );
}
