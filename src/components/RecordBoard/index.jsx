import React, { Component } from 'react';

import './index.css'

class RecordBoard extends Component {
  // 清除已完的回呼
  clearDone = () => {
    const {removeHasDone} = this.props
    removeHasDone()
  }
  // 全選的回呼
  ckeckedAll = (e) => {
    const {ckeckedAll} = this.props
    const done = e.target.checked
    ckeckedAll(done)
  }

  render() {
    const {todos} = this.props
    const hasDoneQuantity = todos.filter((todo) => todo.done === true).length
    const total = todos.length
    return (
      <div className="record_board">
        <div>
          <input type="checkbox" onChange={this.ckeckedAll} checked={hasDoneQuantity === total && total !== 0} />
          <span>已完成 {hasDoneQuantity}/全部 {total}</span>
        </div>
        <button className="btn" ref  onClick={this.clearDone}>清除已完成任務</button>
      </div>
    );
  }
}

export default RecordBoard;
