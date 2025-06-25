import { ReactNode } from "react";
import "./card3.css";

const Card3 = ({ children }: { children: ReactNode }) => {
  return (
    <div className="section-14-card-container">
      <div className="section-14-card-container-wrapper">{children}</div>
    </div>
  );
};

export default Card3;
