import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 text-center p-3">Todo App</h1>
      <h2>Redux Toolkit</h2>
    </>
  );
}

export default App;
