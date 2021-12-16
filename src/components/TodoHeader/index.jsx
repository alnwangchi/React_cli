import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 型別以及必要性的限制 這套需要時要自己安裝

import {nanoid} from 'nanoid' // 一個比 uuid 更小 id 的亂數產生套件

import './index.css'

// console.log(nanoid());
// console.log(nanoid());
// console.log(nanoid());

class TodoHeader extends Component {
  // 對傳入的 props 做型別以及必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  EnterAdd = (e) => {
    // 從事件裡解構 從傳入的 props 裡解構
    const {keyCode, target} = e;
    const {addTodo} = this.props
    // 製作新的 todo
    const newTodo = {
      id: nanoid(),
      name: target.value,
      done: false
    };
    // 判斷案的是否為 Enter 及限制不可為空
    if(keyCode === 13 && target.value.trim() !== '') {
      addTodo(newTodo)
      target.value = '' // 清空輸入框框
    }
  }

  render() {
    return (
      <div className="todo_header">
        <input className="todo_input" onKeyUp={this.EnterAdd}/>
        <button className="btn btn_add">新增</button>
      </div>
    );
  }
}

export default TodoHeader;
