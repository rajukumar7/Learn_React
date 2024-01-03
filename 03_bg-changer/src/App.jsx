import React from "react";
import { useState } from "react";
import ThemeCHanger from "./ThemeCHanger";

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    // <div
    //   className="w-full h-screen duration-200"
    //   style={{ backgroundColor: color }}
    // >
    //   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
    //     <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl ">
    //       <button
    //         onClick={() => setColor("red")}
    //         className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "red" }}
    //       >
    //         Red
    //       </button>
    //       <button
    //         onClick={() => setColor("green")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "green" }}
    //       >
    //         Green
    //       </button>
    //       <button
    //         onClick={() => setColor("blue")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "blue" }}
    //       >
    //         Blue
    //       </button>
    //       <button
    //         onClick={() => setColor("#212121")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "#212121" }}
    //       >
    //         Dark
    //       </button>
    //       <button
    //         onClick={() => setColor("LightGray")}
    //         className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
    //         style={{ backgroundColor: "LightGray" }}
    //       >
    //         White
    //       </button>
    //       <button
    //         onClick={() => setColor("violet")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "violet" }}
    //       >
    //         Violet
    //       </button>
    //       <button
    //         onClick={() => setColor("tomato")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "tomato" }}
    //       >
    //         Tomato
    //       </button>
    //       <button
    //         onClick={() => setColor("orange")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "orange" }}
    //       >
    //         Orange
    //       </button>
    //       <button
    //         onClick={() => setColor("cyan")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "cyan" }}
    //       >
    //         Cyan
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div>
      <ThemeCHanger />
    </div>
  );
};

export default App;
