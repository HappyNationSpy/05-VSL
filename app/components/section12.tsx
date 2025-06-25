import Image from "next/image";
import "./section12.css";
const Section12 = () => {
  return (
    <div id="section-12-container">
      <div className="breaker-line-orange" />
      <div id="section-12-container-wrapper">
        <div id="section-12-container-content">
          <h2>Quem está por trás do Happy Nation Spy?</h2>
          <div>
            <div>
              <h2>Marconi Romulo</h2>
              <Image
                loading="lazy"
                decoding="async"
                width="1080"
                height="1350"
                src="/foto.webp"
                alt="romulo"
              ></Image>
            </div>
            <div>
              <p>
                <span>Fala, aqui é o Marconi.</span>
                <span>
                  {" "}
                  Se você já rodou tráfego direto nos últimos meses, talvez já
                  tenha passado pelo mesmo que eu:
                </span>
              </p>
              <p>
                <span>Queimar verba testando criativo sem base real</span>
                <span>
                  <br />
                </span>
                <span>
                  Modelar anúncio achando que estava “bombando”, mas era de 2
                  anos atrás
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Abrir ferramenta de espionagem e não encontrar nada que
                  realmente ajudasse na hora de decidir o que subir
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Eu já gastei muito no jogo. Já testei muita coisa errada.
                </span>
                <span>
                  <br />
                </span>
                <span>
                  {" "}
                  E depois de perder mais tempo e dinheiro do que gostaria,
                  percebi o que os grandes players realmente fazem:
                </span>
              </p>
              <p>
                <b>
                  Eles não criam tudo do zero. Eles espelham o que já está
                  funcionando — com inteligência.
                </b>
              </p>
              <p>
                <span>Foi por isso que eu criei o Happy Nation Spy.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="breaker-line" />
    </div>
  );
};

export default Section12;
