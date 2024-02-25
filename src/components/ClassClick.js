import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("class button click");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>class click</button>
      </div>
    );
  }
}

export default ClassClick;
