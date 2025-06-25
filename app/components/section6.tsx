"use client";
import Image from "next/image";
import "./section6.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Section6 = () => {
  const [imageRef, imageIsVisible] = useIntersectionObserver<HTMLImageElement>({
    threshold: 0.1,
  });
  return (
    <div id="section-6-container">
      <div id="section-6-container-wrapper">
        <div id="section-6-container-content">
          <div>
            <h2>Happy Nation Spy?</h2>
          </div>
          <div>
            <p>
              <i>
                <span>
                  Sim, existe uma forma nova, simples e inteligente de encontrar
                  criativos lucrativos no tráfego direto.
                </span>
              </i>
            </p>
          </div>
          <div>
            <p>
              <span>A maioria ainda tenta escalar campanhas </span>
              <span>
                <b>baseado em tentativa e erro</b>
              </span>
              <span>
                {" "}
                — gastando tempo e verba testando criativos aleatórios.
              </span>
            </p>
            <p>
              <span>Mas existe uma nova forma de escalar no tráfego pago:</span>
              <span>
                <br />
              </span>{" "}
              <span>
                <b>
                  espionar o que grandes players estão testando e escalando
                  agora
                </b>
              </span>
              <span>, com clareza e velocidade.</span>
            </p>
            <p>
              <span>Essa é a proposta do Happy Nation Spy:</span>
              <span>
                <br />
              </span>
              <span> Te mostrar </span>
              <span>
                <b>quais criativos têm maior chance de dar certo</b>
              </span>
              <span>, antes de você gastar dinheiro neles.</span>
            </p>
            <p>
              <i>
                <span>O Happy Nation Spy foi feito pra quem está </span>
              </i>
              <span>
                <b>
                  <i>no campo de batalha do tráfego direto</i>
                </b>
              </span>
              <i>
                <span>, todos os dias.</span>
              </i>
            </p>
            <p>
              <i>
                <span>E acredite: </span>
              </i>
              <span>
                <b>
                  <i>
                    é isso que os caras que vendem Nutra e Info pesado estão
                    usando agora.
                  </i>
                </b>
              </span>
              <b>
                <i>
                  <br />
                </i>
              </b>
              <i>
                <span>
                  {" "}
                  Se você quer competir com eles, precisa enxergar o jogo com os
                  mesmos olhos.
                </span>
              </i>
            </p>
          </div>
          <div>
            {" "}
            <Image
              className={imageIsVisible ? "fade-in-animation" : ""}
              ref={imageRef}
              loading="lazy"
              decoding="async"
              width="768"
              height="600"
              src="/print-Editado-768x600.webp"
              alt="notebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
