import React, { Component } from "react";
import  "./Home.scss";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div className="clearData">
      Hello world
      </div>
    );
  }
}

export default Home;