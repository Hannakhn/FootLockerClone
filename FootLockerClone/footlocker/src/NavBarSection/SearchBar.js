import React from "react";
import { Button } from "reactstrap";
import { Search } from "react-bootstrap-icons";


function SearchBar() {
  return (
    <>
      <input fill
    placeholder="Search"
      ></input>
      <Button>
        <Search fas icon="search" color="white" />
      </Button>
    </>
  );
}

export default SearchBar;
