import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="phonetics">
      <div className="phonetic">{props.phonetics.text}</div>
      
      <div className="phonetics-audio">
        <ReactAudioPlayer 
          src={props.phonetics.audio}
          onPlay
          controls
       />
      </div>
    </div>
  )
}