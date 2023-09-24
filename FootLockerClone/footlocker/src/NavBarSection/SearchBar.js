import React from "react";
import { Button } from "reactstrap";
import { Search } from "react-bootstrap-icons";


function SearchBar() {
  return (
    <div className='searchBarArea'>
      <input fill
    placeholder="Search"
      ></input>
      <Button>
        <Search fas icon="search" color="white" />
      </Button>
    </div>
  );
}

export default SearchBar;
