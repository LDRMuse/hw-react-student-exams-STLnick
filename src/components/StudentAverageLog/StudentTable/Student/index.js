import React from 'react'
import PropTypes from 'prop-types'

export const Student = ({ first, last, score }) => {

  return (
    <tr>
      <td>{first}</td>
      <td>{last}</td>
      <td>{score}</td>
    </tr>
  )
}

Student.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  score: PropTypes.string
}
