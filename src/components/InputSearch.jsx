import React from "react";

const InputSearch = () => {
  return (
    <form action="" className="w-1/3">
      <label htmlFor="search-input">
        <input
          type="text"
          className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
          name="search-input"
        />
      </label>
    </form>
  );
};

export default InputSearch;
