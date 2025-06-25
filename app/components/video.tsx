import Script from "next/script";

// Você pode criar um ícone de Play em SVG ou usar uma imagem
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const _PlayIcon = () => (
//   <svg
//     style={{
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       width: "80px",
//       height: "80px",
//       filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))",
//     }}
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
//       fill="white"
//     />
//   </svg>
// );

const Video = ({ autoplay }: { autoplay: boolean }) => {
  return (
    <>
      <Script
        src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js"
        data-id="6852f9583be2bca68d08f0ac"
        strategy="lazyOnload"
        
      />
      <div
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
        }}
      >
        <iframe
          frameBorder="0"
          allowFullScreen={true}
          src="https://scripts.converteai.net/50168b72-b90c-4307-88b1-05e70a16f603/players/6852f9583be2bca68d08f0ac/embed.html?autoplay=1" // Adicionado ?autoplay=1
          id="ifr_6852f9583be2bca68d08f0ac"
          title="vsl"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          referrerPolicy="origin"
          allow={autoplay ? "autoplay" : ""}
        ></iframe>
      </div>
    </>
  );
};

export default Video;
