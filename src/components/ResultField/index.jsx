import React, { Component } from 'react'

/* 
關於顯示的這個元件有好幾種狀況
1. 剛進頁面未搜尋的顯示
2. 發送搜尋請求結果未果的 loading 顯示
3. 成功顯示
4. 請求失敗顯示

App父元件的 state 必須記錄
*/
export default class ResultField extends Component {

  // 特別注意 : React 不可以直接 render 一個物件，所以 error 是個物件必須取裡面所需的東西出來才可以
  render() {
    const {users, isLoading, isFirst, error} = this.props;  
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
 