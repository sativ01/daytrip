import * as React from "react";
import { render } from "react-dom";
import Dropdown from "./components/Dropdown";

function App() {
  const handleSelect = (item: string) => {
    alert(`selected: ${item}`);
  };
  const items = [
    "black cat",
    "white cat",
    "orange cat",
    "black dog",
    "white dog",
    "orange dog",
    "bad dog",
    "good cat"
  ];
  const height = 5;
  return (
    <>
      <Dropdown items={items} onItemSelect={handleSelect} height={height} />
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
