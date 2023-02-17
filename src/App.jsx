import { useState } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import Header from "./components/Header";
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
    </div>
  );
}

export default App;
