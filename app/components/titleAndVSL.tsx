import "./titleAndVSL.css";
import Video from "./Video";

const TitleAndVSL = () => {
  return (
    <div id="title-and-vsl-container">
      <div id="title-and-vsl-wrapper">
        <div id="title-wrapper">
          <div>
            <h2>
              Descubra com dois cliques{" "}
              <span id="“des”">
                os criativos que grandes players estão escalando nesse exato
                momento
              </span>{" "}
              nos funis mais lucrativos do BR, EUA e LATAM
            </h2>
          </div>
        </div>
        <div
          id="vsl-player-container"
          style={{ margin: "0 auto", width: "100%", position: "relative" }}
        >
          <Video />
        </div>
      </div>
    </div>
  );
};

export default TitleAndVSL;
