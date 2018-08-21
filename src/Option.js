import React from 'react'
import PropTypes from 'prop-types'

const Option =  ({option,deleteOption,clicked}) => {
  return (
    <div>
      <li onClick={clicked}>{option}</li> 
      <span><button onClick={e => deleteOption(option)}>X</button></span>
    </div>
  )
}

Option.propTypes = {
  option: PropTypes.string.isRequired,
  deleteOption: PropTypes.func.isRequired,
  clicked: PropTypes.func.isRequired
}


export default Option;
