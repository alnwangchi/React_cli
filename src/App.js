import React, { Component } from 'react';

import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import RecordBoard from './components/RecordBoard';


import './App.css'

class App extends Component {
  // 狀態在哪裡，操作的方法就在哪
  state = {
     todos: [
       {
         id: 1,
         name: '投履歷面試',
         done: false
       },
       {
         id: 2,
         name: '傳 props',
         done: true
       }
     ],
  }
  // 用於新增一個 todo 事項，傳給子層 input 新增用
  addTodo = (todoObj) => {
    // 獲取原始狀態 
    const {todos} = this.state;
    // 增加到最前頭
    const newDotos = [todoObj, ...todos]
    // 更新
    this.setState({todos: newDotos});
  }

  // 用於刪除一個 todo 事項，傳給孫層 btn_del 新增用
  delTodo = (id) => {
    // 獲取原始狀態
    const {todos} = this.state;
    // 刪除某筆資料
    const newDotos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    // 更新
    this.setState({todos: newDotos});
  }

  // 用於改變一個 todo 事項的 done 值，傳給孫層 todoItem 改變 checkbox 用
  updateTodo = (id,done) => {
    // 獲取原始狀態 
    const {todos} = this.state;
    // 創建新陣列 並判斷若與傳入 id 相同的對象就去更改 done 值 若否則返回原物件
    const newDotos = todos.map((todoObj) => {
      if(todoObj.id === id) {
        return {...todoObj, done: done}
      }else {
        return todoObj
      }
    })
    // 更新
    this.setState({todos: newDotos})
  }
  
  


  render() {
    const {todos} = this.state;
    return (
      <div className="todo">
        <TodoHeader addTodo={this.addTodo}/>
        <TodoList todos={todos} updateTodo={this.updateTodo} delTodo={this.delTodo}/>
        <RecordBoard />
      </div>
    );
  }
}

export default App;
