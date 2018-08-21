import React, { Component } from "react";
import Option from "./Option";

class Options extends Component {
  constructor(props) {
    super(props);
    this.bindEvents();
  }
  bindEvents() {
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log("[handleRemoveAll] Options");
    const options = this.props.options.slice();
    options.splice(0, options.length);
    this.props.removeAll();
  }
  render() {
    const { options } = this.props;
    return (
      <div>
        <ul>
          {options.map((option, index) => (
            <Option key={index} option={option} />
          ))}
        </ul>
        <button onClick={this.handleRemoveAll}>Remove all decisions</button>
      </div>
    );
  }
}
export default Options;
