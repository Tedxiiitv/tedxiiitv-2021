import React from "react";
import Navbar from "../Navbar/Navbar";
import VideoBox from "../VideoBox/VideoBox";
import talkData from "./talkData.json";

const Talk = () => {
  return (
    <>
      <Navbar />
      {talkData.map(({ link, title, speaker, text }) => (
        <VideoBox link={link} title={title} speaker={speaker} text={text} />
      ))}
    </>
  );
};

export default Talk;
