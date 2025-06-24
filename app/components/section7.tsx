import Image from "next/image";
import "./section7.css";

const Section7 = () => {
  return (
    <div id="section-7-container">
      <div id="section-7-container-wrapper">
        <div id="section-7-container-content">
          <div>
            <h2>Com o Happy Nation Spy, você vai:</h2>
          </div>
          <div>
            <ul>
              <li>
                <i>
                  <span>
                    Espionar criativos testados e validados em funis de VSL
                  </span>
                </i>
                <i>
                  <span>
                    <br />
                    <br />
                  </span>
                </i>
              </li>
            </ul>
            <ul>
              <li>
                <i>
                  <span>
                    Encontrar ideias de anúncios que estão sendo escalados agora
                    no BR, US e LATAM
                  </span>
                </i>
                <i>
                  <span>
                    <br />
                    <br />
                  </span>
                </i>
              </li>
            </ul>
            <p>
              <i></i>
              <span>
                <i>
                  <span>
                    Modelar o que já tá funcionando e evitar perder verba com
                    chute
                  </span>
                </i>
              </span>
              <i>
                <span>
                  <br />
                </span>
              </i>
            </p>
          </div>
          <div>
            <p>
              <i>
                <span>Você não precisa entender de espionagem.</span>
              </i>
              <i>
                <span>
                  <br />
                </span>
              </i>
              <i>
                <span> Não precisa gastar milhares testando criativo.</span>
              </i>
              <i>
                <span>
                  <br />
                </span>
              </i>{" "}
              <b>
                <i>Você só precisa de 2 cliques.</i>
              </b>
            </p>
          </div>
          <div>
            {" "}
            <Image
              loading="lazy"
              decoding="async"
              width="768"
              height="600"
              src="/tabela-Editado-1-768x384.webp"
              alt="print"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
