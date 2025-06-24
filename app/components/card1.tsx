import "./card1.css";
import { ReactNode, RefObject } from "react";
const Card1 = ({
  fadeInPosition,
  children,
  ref,
  isVisible,
}: {
  fadeInPosition: "top" | "left" | "right" | "bottom";
  children: ReactNode;
  ref: RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}) => {
  return (
    <div
      ref={ref}
      className={`section-5-card-container ${isVisible ? `fade-in-${fadeInPosition}` : ''}`}
    >
      <div className="section-5-card-container-wrapper">{children}</div>
      <div className="section-5-card-bottom"></div>
    </div>
  );
};

export default Card1;
