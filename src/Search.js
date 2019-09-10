import React from "react";
import SearchBar from "./lib/SearchBar";

const Search = props => {
  console.log("in search page props", props);
  return (
    <div>
      <SearchBar {...props} />
      <h2>hey</h2>hello
    </div>
  );
};

export default Search;
