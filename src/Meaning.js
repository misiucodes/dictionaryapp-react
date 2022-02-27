import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning-container">
      <h2 className="partOfSpeech">{props.meaning.partOfSpeech}</h2>
      
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div className="definitions" key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}