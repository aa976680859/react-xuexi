import logo from './logo.svg';
import './App.css';
import React from 'react';
import Comment from './page/comment/index.js'
import Dynamic from './page/context/dynamic'
import { Example } from './page/hook';
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

function App(){
  return (
  //   React.createElement(
  //   'h1',
  //   {className: 'greeting'},
  //   'Hello, world!'
  // )
  <div>
  <Comment></Comment>
  <Dynamic></Dynamic>
  <Example></Example>
  </div>
  )
}

export default App;
