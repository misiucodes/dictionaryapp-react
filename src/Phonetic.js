import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  const [play, setPlay] = useState(false);

  function handleClick() {
    setPlay(true);
  }

  return (
    <div className="Phonetic">
      <span className="phonetic">{props.phonetic[0].text}</span>
      <button onClick={handleClick}>
          <i className="fas fa-volume-up"></i>
      </button>
      {play && (
        <ReactAudioPlayer
          src={props.phonetic[0].audio}
          autoPlay
          onEnded={() => setPlay(false)}
        />
  
      )}
    </div>
  );
}