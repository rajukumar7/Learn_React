import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  // object declartion
  let myOjb = {
    name: "alexa",
    age: 17,
  };

  // array
  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl mb-4">
        Tailwind Test
      </h1>
      <Card username="raju" btnText="click me" /> {/* passing simple props */}
      <Card username="kumar" btnText="add more" />
      <Card username={myOjb.name} btnText="save" />{" "}
      {/* passing object as a props */}
      <Card username={newArr} /> {/* passing array as a props */}
    </>
  );
}

export default App;
