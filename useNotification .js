import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useNotification = (title, options) => {
  if (!"Notification" in window) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

function App() {
  const triggerNofication = useNotification("useNotification is working", {
    body: "I'm learning Custom Hooks tutorial.",
  });
  return (
    <div className="app-box">
      <h1>Welcome to React Custom Hooks Page</h1>
      <h2>#9. useNotification</h2>
      <button onClick={triggerNofication}>click</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
