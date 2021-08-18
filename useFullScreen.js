import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  // 브라우저마다 지원하는 API가 달라서 아래와 같이 여러 케이스에 따른 조건을 줬다.
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
        //Firefox
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
        //Opera
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
        //MS
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFullscreen };
};

function App() {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We're full" : "We're small");
  };
  const { element, triggerFull, exitFullscreen } = useFullscreen(onFullScreen);

  return (
    <div className="app-box">
      <h1>Welcome to React Custom Hooks Page</h1>
      <h2>#8-2. useFullScreen</h2>
      <div ref={element}>
        <img src="url" />
        <br />
        <div className="btn-box">
          <button onClick={triggerFull}>Go Fullscreen</button>
          <button onClick={exitFullscreen}>Exit Fullscreen</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
