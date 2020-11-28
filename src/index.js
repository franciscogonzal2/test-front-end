import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./js/components/Home/Home";

class App extends Component {

  render() {
    return (
      <div>
          Hola mundo
          <Home />
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("root");
ReactDOM.render(<App />, wrapper);