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

  // get all countries on load
  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("https://restcountries.com/v2/all");
        setCountries(res.data);
      } catch (error) {
        console.log(error);
      }
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

  return (
    <div className="App day-mode">
      <Header
        BsMoon={BsMoon}
        BsMoonFill={BsMoonFill}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <SearchFilter onInputSubmit={onInputSubmit} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
