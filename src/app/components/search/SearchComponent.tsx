"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { fetchSearchMovies } from "@/app/redux/movie/movieThunk";
import { Button, Input, SearchContainer, SearchIcon } from "@/app/styles/search/SearchStyled";
import { setSearchQuery } from "@/app/redux/search/searchSlice";

const SearchComponent = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.search.query);
  const [inputValue, setInputValue] = useState<string>(query);

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    dispatch(setSearchQuery(inputValue));
    dispatch(fetchSearchMovies(inputValue));
  };

const handleSearchKeyEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter") {
    handleSearch();
  }
};

return (
  <SearchContainer className="focus-effect icon-inside">
    <Input
      type="text"
      placeholder="Search..."
      className="focus-effect icon-inside"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleSearchKeyEvent}
    />
    <Button className="focus-effect" onClick={handleSearch}>Search</Button>
    <SearchIcon className="icon-inside" />
  </SearchContainer>
);

};

export default SearchComponent;


