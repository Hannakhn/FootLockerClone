import React from "react";
import { Button } from "reactstrap";
import { Search } from "react-bootstrap-icons";


function SearchBar() {
  return (
    <>
      <input
        className="searchInput"
        name="query"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="typeahead"
        aria-label="Search"
        aria-autocomplete="list"
        id="HeaderSearch_search_query"
        role="combobox"
        type="search"
        maxlength="40"
        placeholder="Search"
        autocomplete="off"
        value=""
      ></input>
      <Button>
        <Search fas icon="search" color="white" />
      </Button>
    </>
  );
}

export default SearchBar;
