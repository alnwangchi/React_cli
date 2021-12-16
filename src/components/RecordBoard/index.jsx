import React, { Component } from 'react';

import './index.css'

class RecordBoard extends Component {
  render() {
    return (
      <div className="record_board">
        <div>
          <input type="checkbox" name="" id="" />
          <span>已完成 0/全部 5</span>
        </div>
        <button className="btn">清除所有任務</button>
      </div>
    );
  }
}

export default RecordBoard;
