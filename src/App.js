import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

import './App.css'


class App extends Component {
  render() {
    return ( 
      <div className="router_app">
        <h1>Demo Router</h1>
        <div className="content">
          <nav>
            {/* 
              原生的 html 靠 a標籤跳轉不同的頁面
              在 React 中靠路由連接實現切換元件
            */}
            <Link className="link active" to="/home">Home</Link>
            <Link className="link" to="/about">About</Link>
          </nav>
          <div className="show">
            {/* 路由註冊 */}
            <Routes>
              <Route path='/home' element={<Home/>} />
              <Route path='/about' element={<About/>} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
