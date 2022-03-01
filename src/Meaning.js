import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
return (
  <div className="meanings">
      <h2 className="partofspeech">{props.meanings.partOfSpeech}</h2>
      {props.meanings.definitions.map(function (definition, index) {
      return (
        <div key={index}>
              <div className="definition">{definition.definition}</div>
        
              <div className="example">{definition.example}</div>
              
              <Synonyms synonyms={definition.synonyms} /> 
        
        </div>
        );
      })}
    </div>
  );
}
