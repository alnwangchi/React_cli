import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './index.css';

class TodoListItem extends Component {

  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }
  // 當 input:checkbox 有變化時調用
  changeDone = (id) => {
    return (e) => {
      const {target} = e
      const {updateTodo} = this.props
      updateTodo(id, target.checked)
    }
  }
  // 當刪除按鈕點擊的時候調用
  handleDelete = (id) => {
    return () => {
      const {delTodo} = this.props
      // 多做一層確認詢問 但是不明白為何要用 window.
      if(window.confirm('確定刪除此項目嗎?')){
        delTodo(id) // 只需要 id 判斷要刪除哪一筆
      }else {
        return
      }
    }
  }

  render() {
    const {id, name, done} = this.props
    
    return (
      <li className="todo_item">
        <div>
          <input type="checkbox" name="" id={id} defaultChecked={done} onChange={this.changeDone(id)} />
          <label htmlFor={id}>{name}</label>
        </div>
        <button className="btn btn_del" onClick={this.handleDelete(id)}>刪除</button>
      </li>
    );
  }
}

export default TodoListItem;
