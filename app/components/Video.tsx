"use client";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";

// Você pode criar um ícone de Play em SVG ou usar uma imagem
const PlayIcon = () => (
  <svg
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "80px",
      height: "80px",
      filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))",
    }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
      fill="white"
    />
  </svg>
);

const Video = () => {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <>
      <Script
        src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js"
        data-id="6852f9583be2bca68d08f0ac"
        strategy="lazyOnload"
      />
      {showVideo ? (
        // Se showVideo for true, renderiza o iframe do player de vídeo
        <div
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
          }}
        >
          <iframe
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay" // Adicionado para permitir o autoplay após o clique
            src="https://scripts.converteai.net/50168b72-b90c-4307-88b1-05e70a16f603/players/6852f9583be2bca68d08f0ac/embed.html?autoplay=1" // Adicionado ?autoplay=1
            id="ifr_6852f9583be2bca68d08f0ac"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            referrerPolicy="origin"
          ></iframe>
        </div>
      ) : (
        // Se for false, mostra a fachada (imagem + botão de play)
        <div
          onClick={() => setShowVideo(true)}
          style={{
            position: "relative",
            cursor: "pointer",
            padding: "56.25% 0 0 0", // Mantém o aspect ratio 16:9
          }}
        >
          {/* Use o componente <Image> do Next.js para a thumbnail.
                  Ele otimiza automaticamente a imagem (tamanho, formato, lazy loading).
                  Coloque a imagem do seu vídeo na pasta /public
                */}
          <Image
            src="/capa_deskt_vsl.webp" // <<< MUDE AQUI para o caminho da sua imagem na pasta /public
            alt="Thumbnail do vídeo de apresentação"
            layout="fill"
            objectFit="cover"
            priority // Marque como 'priority' se o vídeo estiver "acima da dobra" (visível sem rolar a página)
          />
          <PlayIcon />
        </div>
      )}
    </>
  );
};

export default Video;
