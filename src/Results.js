import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
  return (
    <div className="results-container">
      <h1 className="word">{props.results.word}</h1>
      {props.results.phonetics.map(function(phonetics, index) {
        return (
          <div key={index}>
            <Phonetic phonetics={phonetics} />
          </div>
        );
      })}
      {props.results.meanings.map(function (meanings, index) {
        return (
          <div key={index}>
            <Meaning meanings={meanings} />
          </div>
        );
      })}
    </div>
    );
  } else {
    return null;
  }
}