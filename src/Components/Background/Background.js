import React from "react";
import "./background.css";
import video from "../../assets/bg-universe.mp4";
import fallbackImage from "../../assets/fallback-image.png";

const Background = () => {
  return (
    <>
      <div>
        <video
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          poster={fallbackImage}
        >
          <source src={video} type="video?mp4"></source>
        </video>
      </div>
    </>
  );
};

export default Background;
