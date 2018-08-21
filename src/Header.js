import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, subtitle }) => {
  // console.log(this.props);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

Header.defaultProps = {
  title: "Todo Application"
};

export default Header;
