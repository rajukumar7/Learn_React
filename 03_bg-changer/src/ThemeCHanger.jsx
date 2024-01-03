import React, { useState } from "react";

const ThemeCHanger = () => {
  const [theme, setTheme] = useState("#94bbe7");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: theme }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 px-3 inset-x-0 ">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg px-3 py-2 bg-white rounded-lg">
          <button
            onClick={() => setTheme("red")}
            className="outline-none px-4 py-2 rounded-lg text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setTheme("green")}
            className="outline-none px-4 py-2 rounded-lg text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setTheme("blue")}
            className="outline-none px-4 py-2 rounded-lg text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setTheme("grey")}
            className="outline-none cursor-pointer px-4 py-2 rounded-lg text-white shadow-lg"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>

          <button
            onClick={() => setTheme("skyblue")}
            className="outline-none cursor-pointer px-4 py-2 rounded-lg text-white shadow-lg"
            style={{ backgroundColor: "skyblue" }}
          >
            Sky
          </button>

          <button
            onClick={() => setTheme("indigo")}
            className="outline-none cursor-pointer px-4 py-2 rounded-lg text-white shadow-lg"
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>
          <button
            onClick={() => setTheme("violet")}
            className="outline-none cursor-pointer px-4 py-2 rounded-lg text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeCHanger;
