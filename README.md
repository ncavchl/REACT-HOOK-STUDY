# REACT-HOOK-STUDY
노마드코더  리액트 훅 패던 학습
https://nomadcoders.co/react-hooks-introduction/lobby


[https://react.vlpt.us/](https://react.vlpt.us/)



## CRA
Creact-react-app / 번들 없이 
Create React App 은 백앤드 로직이나 데이터베이스를 제어할 수 없음. Create React App 은 프런트 앤드 빌드 파이프라인만 생성하기 때문에 백 앤드를 원하는 대로 사용할 수 있음. Create React App는 Babel이나 webpack같은 build 도구를 사용하나, 설정 없이도 동작.

## material-ui 사용
-[https://react.vlpt.us/styling/03-styled-components.html](https://react.vlpt.us/styling/03-styled-components.html)

## middleware
액션과 리듀서 사이의 중간자라고 이해하시면 되겠습니다.

## typescript 정적타입 지원 / 컴파일 중 오류 확인 가능

## web vitals  사용자 경험 품질 측정, 최적화
서버 통신 - xios
상태관리 - redux 
로딩, fail 등 - middleware
타이포그래피??

## redux-saga 상태관리
`redux-saga` 는 리액트/리덕스 애플리케이션의 사이드 이펙트, 예를 들면 데이터 fetching이나 브라우저 캐시에 접근하는 순수하지 않은 비동기 동작들을, 더 쉽고 좋게 만드는 것을 목적으로하는 라이브러리입니다.
saga는 애플리케이션에서 사이드 이펙트만을 담당하는 별도의 쓰레드와 같은 것으로 보면 됩니다. `redux-saga`는 리덕스 미들웨어입니다.
[https://mskims.github.io/redux-saga-in-korean/](https://mskims.github.io/redux-saga-in-korean/)

## 추가 확장도구 - 코드 자동 정리
Prettier - code formmater
formatter
eslint
설정파일 - .eslintrc.js / .prettierrc
[https://velog.io/@kyusung/eslint-prettier-config](https://velog.io/@kyusung/eslint-prettier-config)





## Spread 연산자 { ...} - 객체/배열 복제, 병합, 일부수정 



## Hook 이란?

✔️함수 컴포넌트에서 React state와 Lifecycle 기능을 연동할 수 있게 해주는 함수 (버전 16.8부터 도입)

✔️만들어진 목적 자체가 함수 컴포넌트에서 사용하기 위함이었으니 당연히 클래스 컴포넌트 안에서는 동작하지 않음

✔️기존에 함수 컴포넌트를 사용하다가 state를 추가하고 싶어서 클래스 컴포넌트로 바꾸곤 했는데 이제 그럴 필요가 없다



## Hook 사용 규칙

**1️⃣최상위에서만 Hook 호출이 가능** (루프, 조건문, 중첩된 함수 안에서는 사용할 수 없음) : 조건문을 Hook 내부에 넣는 것은 괜찮음

-> 컴포넌트가 렌더링 될 때마다 항상 동일한 순서로 Hook이 호출되는 것이 보장되어 state를 올바르게 유지할 수 있음

2️⃣**리액트 함수 컴포넌트 내에서만 호출이 가능**하며, 일반 자바스크립트 함수 안에서는 호출하면 안됨 (custom hook에서는 가능)

#### useEffect, useState 사용 









## Hook 만든 이유

**☑️컴포넌트들 사이에서 상태 로직을 재사용하는 것의 어려움**

 \- higher-order component는 코드 추적이 어렵고 ‘wrapper hell’

 \- Hook은 컴포넌트의 계층을 바꾸지 않고 상태 로직을 재사용할 수 있음

 

**☑️복잡한 컴포넌트는 이해하기 어려움**

 \- 여러 Lifecycle 메소드들이 관련 없는 로직들과 섞여 있음 

 \- 그래서 버그가 자주 발생하고 무결성 유지가 어려움

 

**☑️ Class 컴포넌트는 인간과 기계 모두를 혼란스럽게 함**

 \- 리액트의 진입장벽

 \- 코드가 장황해짐

 \- Class 없이 React 기능을 사용해보자! -> **Hook**



#### https://hocheon.tistory.com/79 참고







## Hook 14가지

- [useState](#useState) - state 변경 
- [useTitle](#useTitle) - title 변경

- [useInput](#useInput) - input 상태, 검증 
- [usePageLeave](#usePageLeave) - user가 page를 벗어나는 시점 발견하여 함수실행
- [useClick](#useClick)  - element 를 click 하는 시점 발견
- [useFadeIn](#useFadeIn) - element 에 fade 애니메이션 적용
- [useFullscreen](#useFullscreen) - element를 full screen 으로 만들거나 일반 화면으로 돌아가게 함
- [useHover](#useHover) - 마우스 hover 시 
- [useNetwork](#useNetwork) - online, offline 상태 감지
- [useNotification](#useNotification) - notififacion api 사용시 user에게 알림 보냄
- [useScroll](#useScroll) - scroll 시 감지
- [useTabs](#useTabs) - tab 사용 쉽도록
- [usePreventLeave](#usePreventLeave) - user가 변경사항이나 저장하지 않고 페이지를 벗어날때 확인하는 것
- [useConfirm](#useConfirm) - usePreventLeave와 비슷 
- [useAxios](#useAxios) - HTTP requests clients axois 를 위한 wrapper 같은 것



## useState

```react
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
	
```



## useinput

- useState

```react
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function useInput (element, validator){
  const [ value, setValue ] = useState(element);
  const onChange = event => {
    const  {target : {value}} = event;
    let willUpdate = validator(value);
    if(willUpdate) {
      setValue(value);
    }
  }
  return {value, onChange}
}
function App() {
  const maxLength = (value)=> {
    return (value.length <= 10); 
    // return (!value.includes("#"));
  }
  const name = useInput("Mr.", maxLength);
  return (
    <div>
      <input placeholder="Name" {...name}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

```





## usePageLeave



## useTabs

- useState

```react
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section2",
  },
];

const useTabs = (indexTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(indexTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)} key={index}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```



## useEffect

### ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate

version1

```react
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const sayHello = () => console.log("hello");
  useEffect(() => {
    sayHello();
  });

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  return (
    <div className="App">
      <div>Hello</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```



version2

```react
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);

  return (
    <div className="App">
      <div>Hello</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```







## useTitle

- useEffect

```useTitle
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000); //5초뒤에 title을 home으로 변경
  return(
    <div className="App">
      <div>Hello</div>
    </div>
  )
};


ReactDOM.render(<App />, document.getElementById('root'));
```





## useClick

useEffect

* useRef

  ```react
  import React, { useRef } from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  
  
  
  const App = () => {
    const potato = useRef();
    // setTimeout(() => console.log(potato), 4000); //log를 이용해서 potato에 어떤게 입력되는지 확인한다.
    setTimeout(() => potato.current.focus(), 4000); //4초뒤에 input창으로 focus가 잡힌다.
    return(
      <div className="App">
        <div>Hello</div>
        <input ref={potato} placeholder="1" />
      </div>
    )
  };
  
  
  ReactDOM.render(<App />, document.getElementById('root'));
  ```

  



```
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const useClick = (onClick) =>{
  const element = useRef(); 
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    //step2 시작
    return () => {
      if(element.current){
        element.current.removeEventListener("click", onClick)}
      }
  }, [] );
  //step2 끝
  return element;
} 

const App = () => {
  const sayHello = () => console.log("sayHello");
  
  const title = useClick(sayHello);
  return(
    <div className="App">
      <h1 ref={title}>Hello</h1>
      
    </div>
  )
};


ReactDOM.render(<App />, document.getElementById('root'));
```





## useHover







## useConfirm

useEffect

```
```

