import React, { useState, useCallback, useEffect, useRef } from "react";

const PasswordGeneratorRedo = () => {
  const [lenght, setLenght] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+{}[]|<>.?";
    for (let i = 1; i < lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [lenght, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.selectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2 text-orange-500 bg-gray-700">
      <h1 className="text-center text-white m-1">Password Generator</h1>
      <div className="flex shadow-md rounded-lg overflow-hidden  mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full px-3 py-1 "
          readOnly
          placeholder="Password"
          ref={passwordRef}
        />

        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            className="cursor-pointer"
            value={lenght}
            onChange={(e) => setLenght(e.target.value)}
          />
          <label htmlFor="Length">Length : {lenght}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            className="cursor-pointer"
          />
          <label htmlFor="number">Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            className="cursor-pointer"
          />
          <label htmlFor="Characters">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGeneratorRedo;
