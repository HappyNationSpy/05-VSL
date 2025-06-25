"use client";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "./section8.css";

const Section8 = () => {
  const [textRef, textIsVisible] = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.9,
  });
  return (
    <div id="section-8-container">
      <div id="section-8-container-wrapper">
        <div id="section-8-container-content">
          <h2>
            AGORA, RESPONDA RÁPIDO:{" "}
            <span ref={textRef} className={textIsVisible ? "visible" : ""}>
              O HAPPY NATION SPY É PRA VOCÊ?
            </span>
          </h2>
          <div>
            <p>
              <span>
                <span>
                  <span>
                    Você já perdeu dinheiro testando criativos que não deram em
                    nada?
                  </span>
                </span>
              </span>
            </p>
            <p>
              <span>
                <span>
                  <span>
                    Já rodou anúncio achando que ia converter — e não vendeu uma
                    unidade?
                  </span>
                </span>
              </span>
            </p>
            <p>
              <span>
                <span>
                  <span>
                    Você já sentiu que está sempre tentando adivinhar o que pode
                    funcionar?
                  </span>
                </span>
              </span>
            </p>
            <p>
              <span>
                <span>
                  <span>
                    Já testou criativos de inspiração gringa que não escalaram
                    no BR?
                  </span>
                </span>
              </span>
            </p>
            <p>
              <span>
                <span>
                  <span>
                    Já perdeu tempo modelando um criativo que tava rodando… mas
                    era de dois anos atrás?
                  </span>
                </span>
              </span>
            </p>
            <p>
              <span>
                <span>
                  <span>
                    Está cansado de ferramentas genéricas que só mostram o que
                    todo mundo já viu?
                  </span>
                </span>
              </span>
            </p>
            <p>
              <span>
                <span>
                  <span>Quer saber </span>
                  <span>
                    <b>o que está funcionando agora</b>
                  </span>
                  <span> pra escalar com mais segurança e menos prejuízo?</span>
                </span>
              </span>
            </p>
            <p>
              <span>
                <span>
                  <span>
                    Quer encontrar criativos validados em 2 cliques, sem
                    precisar ser um expert em espionagem?
                  </span>
                </span>
              </span>
            </p>
            <p>
              <span>
                <span>
                  <span>
                    Quer finalmente escalar com ROI positivo usando o que os
                    grandes estão fazendo?
                  </span>
                </span>
              </span>
            </p>
          </div>
          <div>
            <p>
              <span>
                <b>
                  Se você disse “sim” pra pelo menos 2 dessas perguntas… você
                  está no lugar certo.
                </b>
              </span>
            </p>
            <p>
              <span>
                <span>
                  Existe uma forma muito mais inteligente de acertar no criativo
                  —
                </span>
                <span></span>
                <span> e ela começa quando você espiona </span>
                <b>o que os grandes estão escalando agora</b>
                <span>.</span>
              </span>
            </p>
          </div>
          <div>
            <h2>
              Happy Nation Spy, a ferramenta de espionagem pra quem{" "}
              <u>escala de verdade </u>{" "}
            </h2>
            <p>
              <span>
                Uma ferramenta de espionagem criada pra quem vende Nutra e Info
                nos mercados mais lucrativos do mundo (BR, US e LATAM).
              </span>
            </p>
            <div>
              <p>
                <span>
                  Com apenas 2 cliques, você descobre quais criativos estão
                  sendo escalados{" "}
                </span>
                agora mesmo
                <span>
                  {" "}
                  — com destaque visual por volume de variações e campanhas
                  ativas.
                </span>
              </p>
              <p>
                <span>Chega de testar no escuro.</span>
                <span></span>{" "}
                <span>
                  <b>Agora você sabe o que funciona antes de gastar.</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
