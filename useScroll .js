import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  // scroll 이벤트 발생시 state의 x값과 y값을 window.scroll값으로 업데이트 해준다.
  const onScroll = () => {
    setState({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};

function App() {
  const { y } = useScroll();
  console.log("scrollY", y);
  return (
    <div className="app-box" style={{ height: "1000vh" }}>
      {/* <h1>Welcome to React Custom Hooks Page</h1> */}
      <h2 style={{ position: "fixed", color: y > 250 ? "red" : "blue" }}>
        #8-1. useScroll
      </h2>
      <div></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
