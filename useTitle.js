import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000); //5초뒤에 title을 home으로 변경
  return (
    <div className="App">
      <div>Hello</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
