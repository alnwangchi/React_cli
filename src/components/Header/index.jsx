import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    console.log('Header', this.props);
    return (
      <h1>Demo Router</h1>
    )
  }
}
