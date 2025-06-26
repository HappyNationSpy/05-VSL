"use client";
import Image from "next/image";
import "./section2.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Section2 = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.3,
  });

  return (
    <div id="section-2-container">
      <div id="section-2-container-wrapper">
        <div id="section-2-container-1">
          <div id="section-2-container-1-wrapper">
            <h2>DIGITE UMA DOR OU PROMESSA DO SEU NICHO</h2>
            <div id="section-2-container-1-image-wrapper">
              <Image
                decoding="async"
                priority={true}
                width="551"
                height="701"
                src="/asset-imagem.webp"
                alt="print"
                sizes="(max-width: 551px) 100vw, 551px"
              />
            </div>
          </div>
        </div>
        <div id="section-2-container-2">
          <p>
            <span>
              Aponte direto para nicho que você quer espionar digitando uma
              promessa ou dor deles:
            </span>
            <span>
              <br />
            </span>{" "}
            <span>
              <b>
                “diabetes tipo 2”, “testosterona baixa”, “memória fraca”, “queda
                de cabelo”…
              </b>
            </span>
          </p>
          <p>
            <span>Com apenas </span>
            <span>
              <b>1 clique</b>
            </span>
            <span>, o Happy Nation Spy revela os </span>
            <span>
              <b>
                criativos mais escalados desse mercado, seja no Brasil, EUA ou
                LATAM
              </b>
            </span>
            <span>, destacando automaticamente os que têm </span>
            <b>maior número de variações</b>
            <span>.</span>
          </p>
          <p>
            <span>✅ Se tem muita variação rodando,</span>
            <span> ✅ É porque tem verba sendo investida.</span>
            <span> ✅ E se tem verba, é porque </span>
            <b>está vendendo.</b>
          </p>
          <b
            ref={ref}
            className={`${isVisible ? "fade-in-top-animation" : ""}`}
          >
            Esse é o caminho exato pra escalar tráfego direto com inteligência e
            sem rasgar verba.
          </b>
        </div>
      </div>
    </div>
  );
};

export default Section2;
