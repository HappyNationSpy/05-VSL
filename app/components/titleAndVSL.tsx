"use client";
import dynamic from "next/dynamic";
import "./titleAndVSL.css";

const VideoSkeleton = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "56.25% 0 0 0" /* Proporção 16:9 */,
        backgroundColor: "#e0e0e0", // Um cinza claro
        borderRadius: "8px",
      }}
    />
  );
};

const DynamicVideo = dynamic(() => import("./Video"), {
  ssr: false,
  loading: () => <VideoSkeleton />,
});

const TitleAndVSL = () => {
  return (
    <div id="title-and-vsl-container">
      <div id="title-and-vsl-wrapper">
        <div id="title-wrapper">
          <div>
            <h2>
              Descubra com doiss cliques{" "}
              <span id="“des”">
                os criativos que grandes players estão escalando nesse exato
                momento
              </span>{" "}
              nos funis mais lucrativos do BR, EUA e LATAM
            </h2>
          </div>
        </div>
        <div
          id="vsl-player-container"
          style={{ margin: "0 auto", width: "100%", position: "relative" }}
        >
          <DynamicVideo />
        </div>
      </div>
    </div>
  );
};

export default TitleAndVSL;
