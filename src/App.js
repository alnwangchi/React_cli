import React, { Component } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';
import Home from './pages/Home';
import About from './pages/About';

import './App.css'


class App extends Component {
  render() {
    return ( 
      <div className="router_app">
        <Header />
        <div className="content">
          <nav>
            {/* 
              原生的 html 靠 a標籤跳轉不同的頁面
              在 React 中靠路由連接實現切換元件
            */}
          <MyNavLink to={'/about'} children={"About"} />
          <MyNavLink to={'/home'} children={"Home"} />
          </nav>
          <div className="show">
            {/* 路由註冊 */}
            <Routes>
              <Route path='/home' element={<Home test={666}/>} />
              <Route path='/about' element={<About/>} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
