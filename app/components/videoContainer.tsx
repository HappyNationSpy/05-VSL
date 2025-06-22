"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicVideo = dynamic(() => import("./Video"));

const VideoContainer = () => {
  // Estado para controlar se devemos mostrar o vídeo
  const [shouldShowVideo, setShouldShowVideo] = useState(false);

  useEffect(() => {
    // Estratégia de Atraso: Espera 3 segundos após o carregamento da página
    const timer = setTimeout(() => {
      setShouldShowVideo(true);
    }, 1000); // 3 segundos de atraso

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="vsl-player-container"
      style={{
        margin: "0 auto",
        width: "100%",
        position: "relative",

        zIndex: 1,
      }}
    >
      {/* Só renderiza o vídeo quando shouldShowVideo for true */}
      {shouldShowVideo && <DynamicVideo />}
    </div>
  );
};

export default VideoContainer;
