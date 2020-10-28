import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Content } from "react-mdl";
import "./App.css";
import Main from "./components/main";
// import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <NavBar />
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </div>
    );
  }
}

export default App;
