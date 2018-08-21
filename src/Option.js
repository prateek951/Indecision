import React from 'react'
import PropTypes from 'prop-types'

const Option =  ({option,clicked}) => {
  return (
    <li onClick={clicked}>{option}</li>
  )
}

Option.propTypes = {
  option: PropTypes.string.isRequired,
  deleteOption: PropTypes.func.isRequired,
  clicked: PropTypes.func.isRequired
}


export default Option;
