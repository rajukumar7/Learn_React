import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todods from "./components/Todods";

function App() {
  return (
    <>
      <h1>Todo App with React Redux</h1>
      <AddTodo />
      <Todods />
    </>
  );
}

export default App;
