import "@fontsource/barlow/latin-400.css";
import "@fontsource/barlow/latin-600.css";
import "@fontsource/barlow/latin-700.css";
import "@fontsource/barlow-condensed/latin-700.css";
import "@fontsource/barlow-condensed/latin-800.css";
import "./globals.css";

const description =
  "Conheça a Igreja Chamados para Adorar em Embu-Guaçu. Confira os horários dos cultos, veja como chegar e acompanhe as mensagens da igreja.";

const direction = `<!--
THESIS: a placa de chegada torna a primeira visita visível.
OWN-WORLD: painéis ultramarinos, seta de placa e uma junta rosa sobre fotografia real.
STORY: reconhecer a igreja, consultar os cultos e abrir o mapa, depois acompanhar as mensagens e o app.
FIRST VIEWPORT: barra branca sobre campo azul e foto à direita, unidos por uma diagonal, com faixa de endereço na base.
FORM: Placa de chegada, opção 6, f3b0c067.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export const metadata = {
  title: "Chamados para Adorar | Igreja em Embu-Guaçu",
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Igreja Chamados para Adorar",
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
