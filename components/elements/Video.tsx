import React from "react";
const videoSrc = "/videos/sport.mp4";
const Video = () => {
  return <video autoPlay loop src={videoSrc} muted className="w-full h-auto"></video>;
};

export default Video;
