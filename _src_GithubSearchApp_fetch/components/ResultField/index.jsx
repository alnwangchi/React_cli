import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class ResultField extends Component {

  state = { // 初始值
    users: [],
    isFirst: true, // 是否為第一次進入畫面
    isLoading: false, // 是否為等待數據中 
    error: '' // 錯誤時的訊息
  }

  componentDidMount() {
    // console.log('請按讚訂閱加分享小鈴鐺');
    this.token = Pubsub.subscribe("search",(_,stateObj) => {
      console.log('收到消息囉',stateObj);
      this.setState(stateObj)
    })
  }
  
  componentWillUnmount() {
    Pubsub.unsubscribe(this.token)
  }

  render() {
    const {users, isLoading, isFirst, error} = this.state;  
    return (
      <div className="result_field">
        {
          isFirst ? <h2>尚未搜尋</h2> :
          isLoading ? <h2>Loading......</h2> :
          error ? <h2 style={{color: 'red'}}>{error.message}</h2> :
          users.map(user => {   
            // 從每一筆資料中分別取出大頭貼路徑、github主頁、用戶名稱
            const {login, html_url, avatar_url} = user
            return(
              <div className="user_item" key={login}>
                <a rel="noreferrer" target="_blank" href={html_url} className="img_box">
                  <img src={avatar_url} alt="" />
                </a>
                <h2>{login}</h2>
              </div>
            )
          })
        }
      </div> 
    )
  }
} 
 