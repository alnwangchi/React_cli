import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    const {to} = this.props;
    console.log(this.props);
    // 標籤之間的內容會以 children 傳入
    return (
      <NavLink className="link" {...this.props}/>
    )
  }
}
