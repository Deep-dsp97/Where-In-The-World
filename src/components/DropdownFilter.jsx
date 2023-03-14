import React, { useState } from "react";

const DropdownFilter = ({
  filterByRegion,
  clickDropdown,
  setClickDropdown,
  fetchAll,
}) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  // const [clickDropdown, setClickDropdown] = useState(false);
  const [regionName, setRegionName] = useState("");
  return (
    <div
      id="dropdown-container"
      // ${countries.length ? "" : "hidden"}
      className="relative"
    >
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="h-14 text-zinc-900 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex justify-between items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg"
        type="button"
        onClick={() => setClickDropdown(!clickDropdown)}
      >
        {regionName ? regionName : "Filter by region"}{" "}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`absolute mt-5 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
          clickDropdown ? "" : "hidden"
        }`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li className="">
            <a
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                filterByRegion(null);
                setClickDropdown(false);
                setRegionName("All");
                fetchAll();
              }}
            >
              All
            </a>
          </li>
          {regions.map((region, index) => (
            <li key={index}>
              <a
                href="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  filterByRegion(region);
                  setClickDropdown(false);
                  setRegionName(region);
                }}
              >
                {region}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownFilter;
