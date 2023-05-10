import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> -> 자바스크립트를 검사하는 용도인데 빌드후에 검사를 진행하면서 한번더 빌드? 하기때문에
  // 리스너가 두번 호출되는 현상이 발생한다. 그래서 미리 없앰
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
