import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({ message: "yes, you're clicked it" });
    console.log(this);
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.changeMessage()}>Click</button> */}
        <button onClick={this.changeMessage}>Click</button>
      </div>
    );
  }
}

export default EventBind;
