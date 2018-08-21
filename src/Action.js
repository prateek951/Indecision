import React, { Component } from "react";
import PropTypes from "prop-types";

class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sugdecision: ""
    };
  }
  handlePick = () => {
    console.log("[handlePick] Action");
    const options = this.props.options;
    const index = Math.floor(Math.random() * options.length + 1) - 1;
    this.setState({ sugdecision: options[index] });
  };
  render() {
    const { action, length } = this.props;
    const { sugdecision } = this.state;
    return (
      <div>
        <h1>You can try : {sugdecision}</h1>
        <button onClick={this.handlePick} disabled={length === 0}>{action}</button>
      </div>
    );
  }
}

Action.propTypes = {
  action: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
};

export default Action;
