import React, { Component } from 'react';

import SearchField from './components/SearchField';
import ResultField from './components/ResultField';

import './App.css'

class App extends Component {
  render() {
    return ( 
      <div className="github_app">
        <SearchField /> 
        <ResultField /> 
      </div>
    );
  }
}

export default App;
