import React from "react";
import "./background.css";
import video from "../../assets/bg-universe.mp4";
import fallbackImage from "../../assets/fallback-image.png";

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        poster={fallbackImage}
        id="bg"
      >
        <source src={video} type="video?mp4"></source>
      </video>
    </>
  );
};

export default Background;
