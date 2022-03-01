import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
return (
  <div className="meanings">
    <section className="meanings">
      <h2 className="partofspeech">{props.meanings.partOfSpeech}</h2>
      {props.meanings.definitions.map(function (definition, index) {
      return (
        <div key={index}>
          <p>
              <div className="definition">Definition:</div> {definition.definition}
              <br />
              <div className="example">Example:</div> 
              <em> {definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} /> 
          </p>
        </div>
        );
      })}
      </section>
    </div>
  );
}
