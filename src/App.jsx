import { useState, useEffect } from "react";
import axios from "axios";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import Countries from "./components/Countries";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState();

  // get all countries on load

  const fetchAll = async () => {
    try {
      let res = await axios.get("https://restcountries.com/v2/all");
      setCountries(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (() => {
      fetchAll();
    })();
  }, [setCountries]);

  const onInputSubmit = async (name) => {
    try {
      let res = await axios.get(`https://restcountries.com/v2/name/${name}`);
      setCountries(res.data);
    } catch (error) {
      console.log("Input search fail", error);
    }
  };

  const filterByRegion = async (region) => {
    try {
      if (region != "All") {
        let filter = await axios.get(
          `https://restcountries.com/v2/region/${region}`
        );
        setCountries(filter.data);
      }
    } catch (error) {
      console.log("Search Filter fail", error);
    }
  };

  return (
    // <div className={`App ${!darkMode ? "day-mode" : "dark-mode"}`}>
    <div className="App">
      <Header
        BsMoon={BsMoon}
        BsMoonFill={BsMoonFill}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <SearchFilter
        onInputSubmit={onInputSubmit}
        countries={countries}
        filterByRegion={filterByRegion}
        setRegions={setRegions}
      />
      <Countries
        countries={countries}
        setRegions={setRegions}
        regions={regions}
      />
    </div>
  );
}

export default App;
