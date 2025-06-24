"use client";
import dynamic from "next/dynamic";
import Header from "./components/header";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Title from "./components/title";
import VideoContainer from "./components/videoContainer";
import "./page.css";

const DynamicLazySections = dynamic(
  () => import("./components/lazySections"),
  {}
);

export default function Home() {
  return (
    <div id="page">
      <Header />
      <Title />
      <VideoContainer />
      <Section2 />
      <Section3 />
      <DynamicLazySections />
    </div>
  );
}
