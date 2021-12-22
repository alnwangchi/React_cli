import React, { Component } from 'react'
// import axios from 'axios' // AJAX
import Pubsub from 'pubsub-js' // 訂閱發布


export default class SearchField extends Component {

  searchUser = async () => {
    const {keyWordElement:{value:keyWord}} = this

    Pubsub.publish('search',{
      isFirst: false,
      isLoading: true
    })  

    const url = `https://api.github.com/search/users?q=${keyWord}`
    // axios.get(url)
    //   .then(response => {
    //     const usersData = response.data.items
    //     Pubsub.publish('Hi', {isLoading: false, users: usersData})
    //   })
    //   .catch(error => {
    //     Pubsub.publish('Hi', {isLoading: false, error: error})
    //   })
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data.items);
      Pubsub.publish('search', {isLoading: false, users: data.items})
    } catch (error) {
      console.log(error);
    }

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
