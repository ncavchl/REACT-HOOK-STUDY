import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function useInput(element, validator) {
  const [value, setValue] = useState(element);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = validator(value);
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
}
function App() {
  const maxLength = (value) => {
    return value.length <= 10;
    // return (!value.includes("#"));
  };
  const name = useInput("Mr.", maxLength);
  return (
    <div>
      <input placeholder="Name" {...name} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
