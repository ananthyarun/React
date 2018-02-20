import React from "react";
import logo from "./logo.svg";

// class Header extends Component {
//   render() {
//     return (
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//         {this.props.children}
//       </header>
//     );
//   }
// }

export function Header1() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React1</h1>
    </header>
  );
}

export function Header2() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React2</h1>
    </header>
  );
}
