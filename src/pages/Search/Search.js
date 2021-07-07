import React from "react";
import Header from "../../components/Header";
import ListRepositories from "../../components/ListRepositories";
import SearchInput from "../../components/SearchInput";
import { Container } from "@material-ui/core";

const Search = () => {
  return (
    <div>
      <Header />
      <Container>
        <SearchInput />
        <ListRepositories />
      </Container>
    </div>
  );
};

export default Search;
