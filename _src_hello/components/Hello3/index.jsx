import React, { Component } from 'react'
import hello3 from './index.module.css'; // 透過 css 模組化來避免樣式衝突

export default class Hello extends Component {
  // className 要改成這樣子像物件取用的方式
  render() {
    return <h1 className={hello3.title}>Hi Hi Hello !!!</h1> 
  }
}