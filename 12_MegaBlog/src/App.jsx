import React from "react";
import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h1 className="bg-green-500 text-center">a blog with app write</h1>
    </>
  );
}

export default App;
