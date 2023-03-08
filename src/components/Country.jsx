import React from "react";

const Country = ({ flag, name, population, region, capital }) => {
  return (
    <a href="/" className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full object-contain" src={flag} alt={name} />
      {/* <div className="flag"></div> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <strong>Population:</strong> {population}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Region:</strong> {region}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </a>
  );
};

export default Country;
