import React from "react";
import InputSearch from "./InputSearch";
import DropdownFilter from "./DropdownFilter";

const SearchFilter = () => {
  return (
    <div className="xl:container flex flex-row items-center justify-between mt-32 mx-auto px-4">
      <InputSearch />
      <DropdownFilter />
    </div>
  );
};

export default SearchFilter;
