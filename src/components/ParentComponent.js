import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.GreetParent = this.GreetParent.bind(this);
  }
  GreetParent(childName) {
    alert(`Hello  ${this.state.parentName}! , this is :${childName}!`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.GreetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
