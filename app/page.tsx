import Header from "./components/header";
import TitleAndVSL from "./components/titleAndVSL";
// import VideoContainer from "./components/videoContainer";
import "./page.css";

export default function Home() {
  return (
    <div id="page">
      <Header />
      <TitleAndVSL />
      {/* <VideoContainer /> */}
    </div>
  );
}
