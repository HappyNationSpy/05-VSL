"use client";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5Card1 from "./section5-card-1";
import Section6 from "./section6";

const LazySections = () => {
  const [ref, isSectionVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      id="lazy-sections-container"
      style={{ minHeight: "1px", minWidth: "1px" }}
    >
      {isSectionVisible ? (
        <>
          <Section3 />
          <Section4 />
          <Section5Card1 />
          <Section6 />
        </>
      ) : null}
    </div>
  );
};

export default LazySections;
