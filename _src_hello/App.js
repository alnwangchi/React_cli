import React, { Component } from 'react'
// 這邊引入 Component 的方式並非直接解構 React 而是在 react 中有個別 export Component 這個類以供引用

// 這一個元件囊括所有的元件
// 直接建立並匯出
export default class App extends React.Component {

  render() {
    return (
      <div>
        Hi
      </div>
    )
  }

}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

