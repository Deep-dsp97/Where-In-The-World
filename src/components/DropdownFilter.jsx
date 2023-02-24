import React from "react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const DropdownFilter = ({ countries, filterByRegion }) => {
  return (
    <div id="dropdown-container" className={countries.length ? "" : "hidden"}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="h-14 text-zinc-900 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg"
        type="button"
      >
        Filter by region{" "}
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
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                filterByRegion(null);
              }}
            >
              All
            </a>
          </li>
          {regions.map((region) => (
            <li key={region}>
              <a
                href="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  filterByRegion(region);
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
