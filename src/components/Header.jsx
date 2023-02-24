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

          <div id="navbar-collapse" className="flex flex-row items-center">
            <strong className="text-md text-zinc-500 mr-2">Turn On</strong>
            <button
              className="flex flex-row justify-between items-center border border-zinc-600 p-3 rounded"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BsMoon /> : <BsMoonFill />}
              <p className="text-md text-zinc-500 ml-2">
                <strong>{!darkMode ? "Dark Mode" : "Day Mode"}</strong>
              </p>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
