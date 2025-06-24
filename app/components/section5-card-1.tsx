"use client";
import "./section5-card-1.css";
import Card from "./card1";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Section5Card1 = () => {
  const [refCard1, isVisibleCard1] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const [refCard2, isVisibleCard2] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const [refCard3, isVisibleCard3] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const [refCard4, isVisibleCard4] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const [refCard5, isVisibleCard5] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  return (
    <div id="section-5-container">
      <div id="section-5-container-wrapper">
        <div id="section-5-container-content">
          <Card ref={refCard1} isVisible={isVisibleCard1} fadeInPosition="top">
            <h2>
              🔎 Veja quais criativos estão sendo testados e escalados agora
              mesmo, por quem realmente vende em Nutra e Info (Nada de anúncio
              morto ou print velho. Só o que tá rodando pesado agora.)
            </h2>
          </Card>
          <Card
            ref={refCard2}
            isVisible={isVisibleCard2}
            fadeInPosition="right"
          >
            <h2>
              🚀 Descubra os anúncios com mais variações rodando, indicando onde
              os grandes players estão apostando grana (Se tem muito teste, tem
              verba. Se tem verba, tá vendendo.)
            </h2>
          </Card>
          <Card ref={refCard3} isVisible={isVisibleCard3} fadeInPosition="left">
            <h2>
              🧠 Acesse ideias de headlines, copys e ângulos de ataque que estão
              sendo usados em campanhas reais (Você modela com base em campanhas
              lucrativas, não em achismo.)
            </h2>
          </Card>
          <Card
            ref={refCard4}
            isVisible={isVisibleCard4}
            fadeInPosition="bottom"
          >
            <h2>
              🌍 Espione campanhas do BR, US e LATAM em segundos, direto da
              Biblioteca de Anúncios do Facebook (Use a inteligência dos grandes
              pra acertar mais rápido nos seus testes.)
            </h2>
          </Card>
          <Card ref={refCard5} isVisible={isVisibleCard5} fadeInPosition="top">
            <h2>
              ⚡ Economize tempo e dinheiro em cada criativo testado (Chega de
              perder ROAS testando no escuro. Você já entra no jogo com
              vantagem.)
            </h2>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Section5Card1;
