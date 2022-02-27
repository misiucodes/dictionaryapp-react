import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {

  console.log(props.results);
  if (props.results) {
  return (
    <div className="results-container">
      <h1 className="word">{props.results.word}</h1>
      {props.results.meanings.map(function(meaning, index) {
        return (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
        );
      })}
    </div>
    );
  } else {
    return null;
  }
}