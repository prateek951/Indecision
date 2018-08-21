import React, { Component } from "react";
import PropTypes from "prop-types";
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
    const { options, deleteOption, clicked } = this.props;
    return (
      <div>
        <ul>
          {options.map((option, index) => (
            <Option key={index} option={option} clicked={clicked} deleteOption={deleteOption} />
          ))}
        </ul>
        <button onClick={this.handleRemoveAll}>Remove all decisions</button>
      </div>
    );
  }
}

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  deleteOption: PropTypes.func.isRequired,
  clicked: PropTypes.func.isRequired     
};

export default Options;
