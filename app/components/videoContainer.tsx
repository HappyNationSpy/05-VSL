import dynamic from "next/dynamic";

const DynamicVideo = dynamic(() => import("./Video"));

const VideoContainer = () => {

  return (
    <div
      id="vsl-player-container"
      style={{
        margin: "0 auto",
        width: "100%",
        position: "relative",
        marginTop: "00px",
        zIndex: 1,
      }}
    >
      {/* Só renderiza o vídeo quando shouldShowVideo for true */}
      <DynamicVideo />
    </div>
  );
};

export default VideoContainer;
