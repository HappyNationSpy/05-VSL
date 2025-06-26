"use client";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Section10 from "./section10";
import Section11 from "./section11";
import Section12 from "./section12";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5Card1 from "./section5-card1";
import Section6 from "./section6";
import Section7 from "./section7";
import Section8 from "./section8";
import Section9Card2 from "./section9-card2";
import Section13 from "./section13";
import Section14Card3 from "./section14-card3";
import Section15 from "./section15";

const LazySections = () => {
  const [ref, isSectionVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const [timerReached, setTimerReached] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerReached(true);
      // const titleElement = document.getElementById("title-container");

      // if (titleElement)
      //   titleElement.style.backgroundImage = 'url("/capa_deskt_vsl.webp"';
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      id="lazy-sections-container"
      style={{ minHeight: "1px", minWidth: "1px" }}
    >
      {isSectionVisible || timerReached ? (
        <>
          <Section3 />
          <Section4 />
          <Section5Card1 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9Card2 />
          <Section10 />
          <Section11 />
          <Section12 />
          <Section13 />
          <Section14Card3 />
          <Section15 />
        </>
      ) : null}
    </div>
  );
};

export default LazySections;
