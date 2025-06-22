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
        marginTop: "-200px",
        zIndex: 1,
      }}
    >
      <DynamicVideo />
    </div>
  );
};

export default VideoContainer;
