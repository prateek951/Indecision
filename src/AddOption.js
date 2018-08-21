import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decision: ""
    };
    this.bindEvents();
  }
  bindEvents() {
    this.handleChange = this.handleChange.bind(this);
    this.handleDecision = this.handleDecision.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleDecision(e) {
    e.preventDefault();
    const { decision } = this.state;
    if (decision) {
      this.props.addOption(decision);
      this.setState({ decision: "" });
    }
  }

  render() {
    const { decision } = this.state;
    return (
      <div>
        <input
          type="text"
          name="decision"
          placeholder="Enter the option"
          value={decision}
          onChange={this.handleChange}
        />
        <button onClick={this.handleDecision}>Add Decision</button>
      </div>
    );
  }
}

AddOption.propTypes = {
  addOption: PropTypes.func.isRequired
}
