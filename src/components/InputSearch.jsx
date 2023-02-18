import React from "react";
import { BiSearch } from "react-icons/bi";

const InputSearch = ({ onInputSubmit }) => {
  return (
    <form action="" className="w-1/3">
      <div id="search-input-container" className="relative">
        <label className="screen-reader-text" htmlFor="search-input">
          Search
        </label>
        <BiSearch className="search-icon absolute" />
        <input
          type="text"
          className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
          name="search-input"
          placeholder="Country Name"
          onChange={(e) => onInputSubmit(e.target.value)}
        />
      </div>
    </form>
  );
};

export default InputSearch;
