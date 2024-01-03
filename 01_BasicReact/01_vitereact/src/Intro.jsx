import React, { useState } from "react";

const Intro = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div>
      <h1>My name is Raju Kumar</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter any value"
      />
      <h3>Enterd value: {inputText}</h3>
    </div>
  );
};

export default Intro;
