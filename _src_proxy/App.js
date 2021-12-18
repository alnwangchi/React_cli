import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  getStudentData = () => {
    axios.get(URL)
      .then(
        response => {console.log('成功', response.data);},
        error => {console.log('失敗', error);}
      )
  }
  
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>獲取學生數據</button>
      </div>
    );
  }
}

export default App;
