import React from "react";
import { useParams } from "react-router-dom";
import fetchCountry from "./fetchCountry";
import { useQuery } from "@tanstack/react-query";
// import { MapContainer, TileLayer, useMap } from "react-leaflet";

const Details = () => {
  const { name } = useParams();
  const results = useQuery(["details", name], fetchCountry);

  if (results.isLoading) {
    return (
      <div className="loading-pain xl:container mx-auto px-4 pt-32">
        <h2 className="loader">Loading...</h2>
      </div>
    );
  }

  const country = results.data?.[0];
  console.log(country);
  return (
    <div className="xl:container mx-auto px-4 pt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
        <div className="country-flag">
          <img className="w-4/5" src={country.flag} alt="" />
        </div>
        <div className="country-details mt-8 sm:mt-0 flex items-center">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold">{country.name}</h1>
            <p className="text-gray-700 text-base mt-5">
              <strong>Native Name:</strong> {country.nativeName}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Capital:</strong> {country.capital}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Currency:</strong> {country.currencies[0].name}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Population:</strong> {country.population}
            </p>

            <p className="text-gray-700 text-base mt-8">
              <strong>Region:</strong> {country.region}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Languages:</strong>{" "}
              {country.languages.map((lang) => lang.name + ",")}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Sub Region:</strong> {country.subregion}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Time Zone:</strong> {country.timezones[0]}
            </p>
          </div>
        </div>
      </div>
      {/* Map Container */}
    </div>
  );
};

export default Details;
