import React from 'react'
import PropTypes from 'prop-types'

export const Student = ({ first, last, score }) => {

  const colorClasses = score < 70 ? "has-background-warning has-text-grey" : ""

  return (
    <tr className={colorClasses}>
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
