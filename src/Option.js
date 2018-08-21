import React from 'react'

const Option =  ({option, deleteOption}) => {
  return (
    <li onClick={deleteOption}>{option}</li>
  )
}

export default Option;
