import dynamic from "next/dynamic";
import Header from "./components/header";
import "./page.css";

const DynamicTitleAndVSL = dynamic(() => import("./components/titleAndVSL"));

export default function Home() {
  return (
    <div id="page">
      <Header />
      <DynamicTitleAndVSL />
    </div>
  );
}
