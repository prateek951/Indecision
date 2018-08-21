import React from 'react'
import PropTypes from 'prop-types'

const Option =  ({option, deleteOption}) => {
  return (
    <li onClick={deleteOption}>{option}</li>
  )
}

Option.propTypes = {
  option: PropTypes.string.isRequired,
  deleteOption: PropTypes.func.isRequired
}


export default Option;
