import React from 'react'
import PropTypes from 'prop-types'

export const AverageDisplay = ({ avgScore }) => {

  return (
    <div>
      <h3>Average Exam Score</h3>
      <h2>{avgScore ? avgScore : 0}</h2>
    </div>
  )
}

AverageDisplay.propTypes = {
  avgScore: PropTypes.number
}
