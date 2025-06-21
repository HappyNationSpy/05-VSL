import dynamic from "next/dynamic";
import Header from "./components/header";
import TitleAndVSL from "./components/titleAndVSL";

import "./page.css";

const DynamicVideo = dynamic(() => import("./components/Video"));

export default function Home() {
  return (
    <div id="page">
      <Header />
      <TitleAndVSL />
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
    </div>
  );
}
