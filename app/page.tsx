import Header from "./components/header";
import Section2 from "./components/section2";
import TitleAndVSL from "./components/title";
import VideoContainer from "./components/videoContainer";
import "./page.css";

export default function Home() {
  return (
    <div id="page">
      <Header />
      <TitleAndVSL />
      <VideoContainer />
      <Section2 />
    </div>
  );
}
