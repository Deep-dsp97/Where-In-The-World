import React from "react";
import InputSearch from "./InputSearch";
import DropdownFilter from "./DropdownFilter";

const SearchFilter = ({
  onInputSubmit,
  countries,
  filterByRegion,
  clickDropdown,
  setClickDropdown,
}) => {
  return (
    <div className="xl:container flex flex-row items-center justify-between pt-32 mx-auto px-4">
      <InputSearch onInputSubmit={onInputSubmit} />
      <DropdownFilter
        countries={countries}
        filterByRegion={filterByRegion}
        clickDropdown={clickDropdown}
        setClickDropdown={setClickDropdown}
      />
    </div>
  );
};

export default SearchFilter;
