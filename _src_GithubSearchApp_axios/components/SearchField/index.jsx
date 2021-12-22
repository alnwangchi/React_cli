import React, { Component } from 'react'
import axios from 'axios'

export default class SearchField extends Component {

  searchUser = () => {
    // 取得輸入內容 連續解構+重名
    const {keyWordElement:{value:keyWord}} = this
    // 拿到往父層傳資料的方法 成功取得數據後調用
    const {updateAppState} = this.props
    // 改變成不為第一次進入畫面的狀態並在 loading 中
    updateAppState({
      isFirst: false,
      isLoading: true
    })
    // 發送 request 給 github
    // 小註解 github 的後端已經解決的跨域問題所以可以得到 response
    const url = `https://api.github.com/search/users?q=${keyWord}`
    axios.get(url)
      .then(response => {
        // console.log("Success!", response.data)
        const usersData = response.data.items
        updateAppState({
          isLoading: false, // 拿到後就不為 loading 狀態
          users: usersData
        })
      })
      .catch(error => {
        // console.log(error)
        updateAppState({
          isLoading: false, // 儘管失敗也不為 loading 狀態
          error: error // 保存錯誤訊息 
        })
      })
  }
  
  render() { 
    return (
      <div className="search_field">
        <h1>Search github users</h1> 
        <div className="input_field">
          <input ref={c => this.keyWordElement = c} type="text" />
          <button className="btn" onClick={this.searchUser}>Search</button>
        </div>
      </div>
    )
  }
}
