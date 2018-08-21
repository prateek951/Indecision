import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decision: "",
      feedback: ""
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
      if (this.props.options.indexOf(decision) > -1) {
        this.setState({ feedback: "Decision already exists", decision: '' });
      } else {
        this.props.addOption(decision);
        this.setState({ decision: "" });
      }
    } else {
      this.setState({ feedback: "Enter a valid decision to add" });
    }
  }

  render() {
    const { decision, feedback } = this.state;
    const styles = {
      color: "red"
    };
    return (
      <div>
        {feedback && <h2 style={styles}>{feedback}</h2>}
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
};
