import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props.results); 
  if (props.results) {
  return (
    <div className="results-container">
      <h1>{props.results.word}</h1>
      {props.results.meanings.map(function (meanings, index) {
        return (
          <div key={index}>
            <Meaning meaning={meanings} />
          </div>
        );
      })}
    </div>
    );
  } else {
    return null;
  }
}