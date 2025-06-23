import Image from "next/image";
import "./section3.css";

const Section3 = () => {
  return (
    <div id="section-3-container">
      <div id="section-3-container-wrapper">
        <div id="section-3-container-title">
          <h2>
            Por que o Happy Nation Spy é a melhor escolha para escalar com o
            máximo de lucro e o mínimo de desperdício?
          </h2>
        </div>
        <div id="section-3-container-content">
          <p>
            <span>
              A resposta pode ser mais simples (e mais óbvia) do que parece…
            </span>
          </p>
          <p>
            <span>
              Preto no branco, de quem vive de tráfego pago para quem também
              vive disso:
              <br />
            </span>
            <span>
              <b>
                Criativos validados geram menos prejuízo, mais assertividade e
                mais ROI com menos verba.
              </b>
            </span>
          </p>
          <p>
            <span>A verdade é que, se você continuar testando </span>
            <span>
              <b>sem espionar o que já tá vendendo,</b>
            </span>
            <span>
              {" "}
              vai demorar muito mais pra escalar — e vai gastar muito mais
              dinheiro até acertar.
            </span>
          </p>
        </div>
        <div id="section-3-container-image">
          <Image
            loading="lazy"
            decoding="async"
            width="768"
            height="432"
            src="/Grafico-768x432.webp"
            alt="chart"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
