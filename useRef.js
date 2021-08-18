import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const potato = useRef();
  // setTimeout(() => console.log(potato), 4000); //log를 이용해서 potato에 어떤게 입력되는지 확인한다.
  setTimeout(() => potato.current.focus(), 4000); //4초뒤에 input창으로 focus가 잡힌다.
  return (
    <div className="App">
      <div>Hello</div>
      <input ref={potato} placeholder="1" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
