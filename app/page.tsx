"use client";
// import dynamic from "next/dynamic";
import Header from "./components/header";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
// import Section4 from "./components/section4";
//import Section5Card1 from "./components/section5-card-1";
import Title from "./components/title";
import VideoContainer from "./components/videoContainer";
import "./page.css";

// const DynamicSection4 = dynamic(() => import("./components/section4"));

export default function Home() {
  return (
    <div id="page">
      <Header />
      <Title />
      <VideoContainer />
      <Section2 />
      <Section3 />
      {/* <DynamicSection4 /> */}
    </div>
  );
}
