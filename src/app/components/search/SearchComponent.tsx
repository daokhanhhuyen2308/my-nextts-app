"use client";

import { FaSearch } from "react-icons/fa";
import { JSX } from "react";
import styled from "@emotion/styled";

const SearchContainer = styled.div`
  display: flex;
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &.focus-effect {
    border-radius: 50px;
    border: 2px solid #aaa;
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    background-color: white;

    &:focus-within {
      border-color: #007bff;
      box-shadow: 0 0 20px rgba(0, 123, 255, 0.3);
    }
  }

  &.icon-inside {
    position: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 12px 15px;
  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: 30px;

  &.focus-effect {
    border-radius: 25px 0 0 25px;
  }

  &.icon-inside {
    padding-left: 40px;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 15px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &.focus-effect {
    background-color: transparent;
    color: #555;
    border-radius: 0 25px 25px 0;

    &:hover {
      color: #007bff;
    }
  }
`;

const SearchIcon = styled(FaSearch)`
  font-size: 1.2rem;
  &.icon-inside {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #555;
  }
`;

const SearchComponent = (): JSX.Element => {
  return (
    <SearchContainer className="focus-effect icon-inside">
      <Input
        type="text"
        placeholder="Search..."
        className="focus-effect icon-inside"
      />
      <Button className="focus-effect">Search</Button>
      <SearchIcon className="icon-inside" />
    </SearchContainer>
  );
};

export default SearchComponent;
