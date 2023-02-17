import React from "react";

const header = ({ BsMoon, BsMoonFill, darkMode, setDarkMode }) => {
  return (
    <header className="fixed top-0 w-full">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto flex justify-between items-center">
          <div className="flex justify-between items-center">
            <a href="/" className="font-bold text-2xl text-zinc-900">
              Where In The world ?
            </a>
          </div>

          <div id="navbar-collapse">
            <button
              className="flex flex-row justify-between items-center"
              onClick={() => setDarkMode(!darkMode)}
            >
              {!darkMode ? <BsMoon /> : <BsMoonFill />}
              <p className="text-md text-zinc-500 ml-2">
                {!darkMode ? "Dark Mode" : "Day Mode"}
              </p>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
