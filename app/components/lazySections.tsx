"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Section4 from "./section4";
import Section5Card1 from "./section5-card-1";

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
          <Section4 />
          <Section5Card1 />
        </>
      ) : null}
    </div>
  );
};

export default LazySections;
