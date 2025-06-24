import Header from "./components/header";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
// import Section4 from "./components/section4";
//import Section5Card1 from "./components/section5-card-1";
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
      <Section3 />
      {/* <Section4 /> */}
    </div>
  );
}
