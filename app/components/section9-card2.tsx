import Card2 from "./card2";
import "./section9-card2.css";

const Section9Card2 = () => {
  return (
    <div id="section-9-container">
      <div id="section-9-container-wrapper">
        <h1>
          Pensa que acabou? Ao ativar sua assinatura, você também recebe acesso
          imediato a bônus exclusivos pra te ajudar a espionar, organizar e
          aplicar com mais resultado.
        </h1>
        <div id="section-9-container-content">
          <Card2>
            <h3>{'Bônus #1 — Mini Treinamento “Espionagem que dá ROI"'}</h3>
            <p>Um treinamento direto ao ponto com 4 aulas mostrando:</p>
            <ul>
              <li>Como usar a ferramenta com eficiência;</li>
              <li>Como fazer buscas estratégicas por palavras-chave;</li>
              <li>Como interpretar o número de variações;</li>
              <li>
                Como modelar criativos escalados pra diferentes etapas do funil.
              </li>
            </ul>
          </Card2>
          <Card2>
            <h3>{"Bônus #2 — Planilha PRO de Rastreamento de Criativos"}</h3>
            <p>
              Uma planilha inteligente pra organizar os criativos que você
              espiona. Classifique por nicho, ângulo, hook, tipo de promessa
              Colunas pra anotar o link, o estágio do funil e status do teste
              (testado, validado, escalado) Visual limpo, pronto pra uso no
              Google Sheets
            </p>
          </Card2>
          <Card2>
            <h3>
              {"Bônus #3 — Lista VIP de Palavras-Chave Validadas por Nicho"}
            </h3>
            <p>
              As palavras que mais retornam criativos escalados por mercado —
              separadas em grupos como: Ereção (ED) / Libido Diabetes /
              Colesterol Skincare / Envelhecimento Memória / Energia Perda de
              peso Renda Extra, e muito mais...
            </p>
          </Card2>
        </div>
      </div>
    </div>
  );
};

export default Section9Card2;
