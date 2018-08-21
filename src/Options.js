import React from "react";
import PropTypes from "prop-types";
import Option from "./Option";

const Options = ({ options, removeAll, deleteOption, clicked }) => {
  const handleRemoveAll = () => {
    console.log("[handleRemoveAll] Options");
    const remoptions = options.slice();
    remoptions.splice(0, remoptions.length);
    removeAll();
  };
  return (
    <div>
      <ul>
        {options.map((option, index) => (
          <Option
            key={index}
            option={option}
            clicked={clicked}
            deleteOption={deleteOption}
          />
        ))}
      </ul>
      <button onClick={handleRemoveAll}>Remove all decisions</button>
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  deleteOption: PropTypes.func.isRequired,
  clicked: PropTypes.func.isRequired
};

export default Options;
