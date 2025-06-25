import Script from "next/script";

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
