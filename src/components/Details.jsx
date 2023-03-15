import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import icon from "leaflet/dist/images/marker-icon.png";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import fetchCountry from "./fetchCountry";
import { useQuery } from "@tanstack/react-query";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const results = useQuery(["details", name], fetchCountry);

  const goBack = () => {
    navigate(-1);
  };

  if (results.isLoading) {
    return (
      <div className="loading-pain xl:container mx-auto px-4 pt-32">
        <h2 className="loader">Loading...</h2>
      </div>
    );
  }

  var myIcon = L.icon({
    iconUrl: "/images/pin.png",
    iconSize: [54, 54],
  });

  const country = results.data?.[0];
  const lanlat = country.latlng;
  return (
    <div className="xl:container mx-auto px-4 pt-32 single-country-info-container">
      <div className="back-arrow">
        <button
          onClick={goBack}
          className="text-gray-700 text-base flex flex-row items-center font-medium"
        >
          <IoArrowBackCircleOutline className="mr-2 text-5xl hover:animate-[spin_1s_ease-in-out]" />
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
        <div className="country-flag">
          <img className="w-full sm:w-4/5" src={country.flag} alt="" />
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
      <MapContainer center={lanlat} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={lanlat} icon={myIcon}>
          {country.name}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Details;
