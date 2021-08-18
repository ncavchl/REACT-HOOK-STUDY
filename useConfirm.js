import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useConfirm = (message = "", onConfirm, onCancle) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  if (!onCancle || typeof onConfirm !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancle();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("delete...."); //확인을 눌렀을때 log출력
  const abort = () => console.log("No delete"); //취소를 눌렀을때 log출력
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
