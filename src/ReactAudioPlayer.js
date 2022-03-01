import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function ReactAudioPlayer(props) {
return (
  <ReactAudioPlayer
    src={props.phonetics.audio}
    autoPlay
    controls
  />
  );
}