import React, { useState } from "react";
import "./Dictionary.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Dictionary() {
const [query, setQuery] = useState("null");


  function search(event) {
    event.preventDefault();
    alert(`Searching for ${query}`);
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Dictionary">
        <form 
          className="col-sm-12 col-md-12 col-lg-12"
          onSubmit={search}
        >
          <input 
            type="search"
            placeholder="What would you like to search?"
            className="form-control"
            onChange={handleQuery}
            autoFocus="off"
          />
         <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifying-icon"/>
      </form>
    </div>
  );
}