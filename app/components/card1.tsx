import "./card1.css";
import { ReactNode } from "react";
const Card1 = ({
  fadeInPosition,
  children,
}: {
  fadeInPosition: "top" | "left" | "right" | "bottom";
  children: ReactNode;
}) => {
  return (
    <div
      className={`section-5-card-container fade-in-${fadeInPosition}-animation`}
    >
      <div className="section-5-card-container-wrapper">{children}</div>
      <div className="section-5-card-bottom"></div>
    </div>
  );
};

export default Card1;
