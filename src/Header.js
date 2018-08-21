import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    // console.log(this.props);
    const { title, subtitle } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
