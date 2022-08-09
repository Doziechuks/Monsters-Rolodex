import React from "react";
import "./search.css";


function Search (props){
  let placeholder = props.placeholder;
  let handleChange = props.handleChange;
  return (
    <div className="search-container">
      <input className="search" type='search' placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}

export default Search;