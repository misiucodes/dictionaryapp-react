import React, { useState } from "react";
import "./Dictionary.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import Results from "./Results";


export default function Dictionary() {
const [query, setQuery] = useState("");
const [results, setResponse] = useState(null);

  function handleSearch(response) {
    setResponse(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    axios.get(apiUrl).then(handleSearch);
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
      <Results results={results} />
      <small>This was coded by Michelle Tran and is open-source on <a href="https://github.com/misiucodes/dictionaryapp-react" target="_blank">Github</a> ♡</small>
    </div>
  );
}