import React from "react";

import Country from "./Country";

const Countries = ({ countries }) => {
  {
    console.log(countries);
  }
  return (
    <div className="countries-container xl:container px-4 mx-auto grid grid-cols-4 gap-16 mt-50 my-11">
      {!countries.length ? (
        <h1>No Countries Found</h1>
      ) : (
        countries.map((res) => (
          <Country
            flag={res.flag}
            name={res.name}
            population={res.population}
            region={res.region}
            capital={res.capital}
            key={res.name}
          />
        ))
      )}
    </div>
  );
};

export default Countries;
