import React, { Component } from 'react';
import PropTypes from 'prop-types'

import TodoListItem from '../TodoListItem'

import './index.css'

class TodoList extends Component {

  static propTypes = {
    // todos: PropTypes.number, 傳入型別不對會報錯
    todos: PropTypes.array,
    updateTodo: PropTypes.func,
    delTodo: PropTypes.func
  }
  
  render() {
    
    const {todos, updateTodo, delTodo} = this.props

    return (
      <>
        <ul className="todo_list">
          {
            todos.map((todo) => <TodoListItem key={todo.id} {...todo} updateTodo={updateTodo} delTodo={delTodo}/>)
          }
        </ul>
      </>
    );
  }
}

export default TodoList;
