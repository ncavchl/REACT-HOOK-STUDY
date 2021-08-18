import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// useFadeIn은 duration과 delay를 매개변수로 각각 1, 0이 초기값이다.
const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      // fade in 애니메이션 효과를 준다.
      // duration과 delay값은 매개변수로 받은 값을 전달
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  // duration과 delay의 타입이 number가 아니라면
  // 리턴값은 없다.
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  // ref는 element를 반환
  // style은 opacity:0을 반환
  return { ref: element, style: { opacity: 0 } };
};

function App() {
  // title과 content의 duaration과 dealy값을 설정
  const fadeInTitle = useFadeIn(0.5, 1);
  const fadeInContent = useFadeIn(1, 2);

  return (
    <div className="app-box">
      <h1>Welcome to React Custom Hooks Page</h1>
      <h2 {...fadeInTitle}>#7-1. useFadeIn</h2>
      <div {...fadeInContent} className="app-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting ...
        desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
