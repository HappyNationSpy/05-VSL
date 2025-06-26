"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image"; // 1. Importe o componente Image

const DynamicVideo = dynamic(() => import("./video"));

const VideoContainer = () => {
  // Estado para controlar se devemos mostrar o vídeo
  const [shouldShowVideo, setShouldShowVideo] = useState(false);
  const [autoplay, setAutoPlay] = useState(true);

  useEffect(() => {
    // Estratégia de Atraso: Espera 3 segundos após o carregamento da página
    const timer = setTimeout(() => {
      setShouldShowVideo(true);
    }, 500); // 3 segundos de atraso

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="vsl-player-container"
      style={
        shouldShowVideo
          ? {
              margin: "0 auto",
              width: "100%",
              position: "relative",
              zIndex: 1,
            }
          : {
              margin: "0 auto",
              width: "100%",
              position: "relative",
              zIndex: 1,
              padding: "56.25% 0 0 0",
              backgroundColor: "black",
              borderRadius: "12px",
              overflow: "hidden",
            }
      }
    >
      {shouldShowVideo ? (
        <DynamicVideo autoplay={autoplay} />
      ) : (
        <Image
          src="/thumbnail2.png"
          alt="Prévia do vídeo de apresentação"
          onClick={() => setAutoPlay(true)}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      )}
    </div>
  );
};

export default VideoContainer;
