import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useBeforeLeave = (onBefore) => {
  const handleLeave = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handleLeave);
    return () => document.removeEventListener("mouseleave", handleLeave);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
};

//마우스가 페이지를 벗어날 시에
const App = () => {
  const beForLife = () => console.log("Please dont leave");
  useBeforeLeave(beForLife);
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
