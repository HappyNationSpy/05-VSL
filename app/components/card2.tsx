import { ReactNode } from "react";
import "./card2.css";
const Card2 = ({ children }: { children: ReactNode }) => {
  return (
    <div className="section-9-card-container">
      <div className="section-9-card-container-wrapper">{children}</div>
    </div>
  );
};

export default Card2;
