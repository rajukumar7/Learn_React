import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-orange-400 text-center py-2 ">Todo App</h1>
      <h2>Jai Shree Ram</h2>
    </>
  );
}

export default App;
