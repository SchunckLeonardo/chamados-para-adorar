const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const media = `${basePath}/media`;
const instagram = "https://www.instagram.com/igrejachamadosparaadorar/";
const whatsapp = "https://wa.me/5511973151816";
const youtube = "https://www.youtube.com/channel/UCX8hM4i6gVvgBMpi4XYXtAg";
const message = "https://www.youtube.com/watch?v=4FbRQ9cXeLw";
const anniversaryPost =
  "https://www.instagram.com/igrejachamadosparaadorar/p/Dfm5Fh-vbVQ/";
const googlePlay =
  "https://play.google.com/store/apps/details?id=br.com.inchurch.cristachamadosadorar&hl=pt_BR";
const street = "Rua Egas dos Santos, 2";
const neighborhood = "Jardim São Paulo · Embu-Guaçu, SP";
const map =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${street}, Jardim São Paulo, Embu-Guaçu, SP`)}`;

const services = [
  { day: "Domingo", hour: "18h", time: "18:00" },
  { day: "Quarta-feira", hour: "19h30", time: "19:30" },
];

const anniversaryServices = [
  { day: "Sábado", date: "21", hour: "19h", time: "2026-11-21T19:00:00-03:00", speaker: "Helder Pinheiro" },
  { day: "Domingo", date: "22", hour: "18h", time: "2026-11-22T18:00:00-03:00", speaker: "Tainá Lima" },
];

function Arrow({ external = false }) {
  return <span className={external ? "arrow arrow-external" : "arrow"} aria-hidden="true" />;
}

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Chamados para Adorar, início">
      <img src={`${media}/chama.webp`} width="44" height="44" alt="" />
      <span>Chamados para Adorar</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="header" id="inicio">
        <div className="container masthead">
          <Brand />
          <nav aria-label="Navegação principal">
            <a href="#celebracao">Celebração</a>
            <a href="#mensagens">Mensagens</a>
            <a href="#aplicativo">Aplicativo</a>
            <a className="nav-social" href={instagram}>Instagram <Arrow external /></a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="celebracao" aria-labelledby="titulo">
          <div className="container hero-contents">
            <div className="anniversary-mark">
              <h1 id="titulo"><span className="anniversary-number">9</span><span className="anniversary-years">anos</span></h1>
              <p>da Igreja Chamados para Adorar</p>
            </div>
            <div className="hero-copy">
              <blockquote>Até aqui nos sustentou,<br /> e adiante nos guiará!</blockquote>
              <p>Um convite para você e sua família celebrarem conosco em Embu-Guaçu.</p>
              <a className="button sign-button" href="#visite">Planeje sua visita <Arrow /></a>
              <a className="text-link campaign-link" href={anniversaryPost}>Veja o convite da igreja <Arrow external /></a>
            </div>
          </div>
          <div className="container celebration-program" aria-label="Programação do aniversário, novembro de 2026">
            {anniversaryServices.map(({ day, date, hour, time, speaker }) => (
              <div className="celebration-day" key={date}>
                <time className="celebration-date" dateTime={time}><span>{date}</span>novembro</time>
                <div className="celebration-detail">
                  <p>{day} · {hour}</p>
                  <h2>{speaker}</h2>
                  <p>Ministração da Palavra</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="visit-section" id="visite" aria-labelledby="visite-titulo">
          <div className="container arrival">
            <div className="arrival-inner">
              <strong>Como chegar</strong>
              <p>{street}<span>{neighborhood}</span></p>
              <a className="text-link" href={map}>Abrir no mapa <Arrow external /></a>
            </div>
          </div>

          <div className="section container visit">
            <div className="visit-intro">
              <h2 id="visite-titulo">Venha celebrar com a gente</h2>
              <p>Venha para um culto de louvor, oração e ensino da Bíblia. Se tiver dúvidas antes de vir, fale com a gente.</p>
              <a className="text-link" href={whatsapp}>Fale pelo WhatsApp <Arrow external /></a>
            </div>
            <div className="visit-times">
              <h3>Cultos regulares</h3>
              <dl>
                {services.map(({ day, hour, time }) => (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd><time dateTime={time}>{hour}</time></dd>
                  </div>
                ))}
              </dl>
              <a className="text-link" href={instagram}>Confira a programação no Instagram <Arrow external /></a>
            </div>
          </div>
        </section>

        <section className="messages" id="mensagens" aria-labelledby="mensagens-titulo">
          <div className="section container">
            <h2 id="mensagens-titulo">Uma mensagem para sua semana</h2>
            <div className="message-grid">
              <a className="message-cover" href={message} aria-label="Assistir à pregação Em tudo dai graças no YouTube">
                <img
                  src={`${media}/pregacao.webp`}
                  alt=""
                  width="960"
                  height="540"
                  loading="lazy"
                />
                <span className="play-icon" aria-hidden="true" />
              </a>
              <div className="message-copy">
                <h3>Em tudo dai graças</h3>
                <p>Uma pregação de Leonardo Schunck Rainha sobre gratidão, a partir de 1 Tessalonicenses 5:18.</p>
                <a className="text-link" href={youtube}>Canal da igreja no YouTube <Arrow external /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="application" id="aplicativo" aria-labelledby="app-titulo">
          <div className="section container app-layout">
            <div>
              <h2 id="app-titulo">A igreja no seu celular.</h2>
              <p>Acompanhe a agenda, reveja mensagens e envie pedidos de oração pelo aplicativo Chamados para Adorar.</p>
              <a className="button sign-button" href={googlePlay}>Baixar na Google Play <Arrow external /></a>
            </div>
            <div className="app-icon" aria-hidden="true">
              <img src={`${media}/app.webp`} alt="" width="224" height="224" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-layout">
          <div>
            <Brand />
            <address>{street}<br />{neighborhood}</address>
          </div>
          <nav aria-label="Canais da igreja">
            <a href={instagram}>Instagram <Arrow external /></a>
            <a href={whatsapp}>WhatsApp <Arrow external /></a>
            <a href={youtube}>YouTube <Arrow external /></a>
          </nav>
        </div>
      </footer>
    </>
  );
}
