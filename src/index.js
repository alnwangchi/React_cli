import React from 'react'; // 引入 react 核心
import ReactDOM from 'react-dom'; // 引入 reactDOM 用於渲染
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // 紀錄效能的東西

// go
import Hello from './components/Hello/Hello'
import Hello2 from './components/Hello2' // 元件名稱為 index 時可以不寫
import Hello3 from './components/Hello3'

// 副檔名 .js .jsx 可省略

ReactDOM.render(
  // StrictMode 用來檢查 App 元件裡頭所有元件可能不對的東西
  <React.StrictMode>
    <Hello /> 
    <Hello2 /> 
    <Hello3 /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
