import React, { Component } from 'react';

import SearchField from './components/SearchField';
import ResultField from './components/ResultField';

import './App.css'

class App extends Component {

  state = { // 初始值
    users: [],
    isFirst: true, // 是否為第一次進入畫面
    isLoading: false, // 是否為等待數據中 
    error: '' // 錯誤時的訊息
  }
  // 原本寫法適合對單一 state 設定，泛用性低
  // saveUsers = (users) => {
  //   this.setState({users})
  // }

  // 直接更新全狀態
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  

  render() {
    return ( 
      <div className="github_app">
        <SearchField updateAppState={this.updateAppState}/> 
        <ResultField {...this.state}/> 
      </div>
    );
  }
}

export default App;
