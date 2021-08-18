import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [item, setItem] = useState(0);
  let increase = () => {
    setItem(item + 1);
  };
  let decrease = () => {
    setItem(item - 1);
  };
  return (
    <div>
      my number : {item} <br />
      <button onClick={increase}>Plus</button>
      <button onClick={decrease}>Minus</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
