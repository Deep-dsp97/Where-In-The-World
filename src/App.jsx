import { useState } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Header
        BsMoon={BsMoon}
        BsMoonFill={BsMoonFill}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <SearchFilter />
    </div>
  );
}

export default App;
