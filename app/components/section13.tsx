import Image from "next/image";
import "./section13.css";

const Section13 = () => {
  return (
    <div id="section-13-container">
      <div id="section-13-container-wrapper">
        <div id="section-13-container-content">
          <Image
            loading="lazy"
            decoding="async"
            width="1504"
            height="563"
            src="/garantia-Editado.webp"
            alt="garantia"
          />
          <div>
            <h1>💸 ROI rápido. Teste sem risco. Zero achismo.</h1>
            <div>
              <p>
                Sim! Você tem tempo de sobra pra acessar a ferramenta, espionar
                os criativos certos e já começar a aplicar nos seus testes.
              </p>
              <p>
                <span>E o melhor:</span>
                <span>
                  <br />
                </span>
                <span>
                  {" "}
                  Você tem até 7 dias pra testar tudo sem compromisso.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="breaker-line" />
    </div>
  );
};

export default Section13;
