import React from 'react'
import PropTypes from 'prop-types'

export const AverageDisplay = ({ avgScore }) => {

  const colorClasses = avgScore < 70 ? "has-background-warning has-text-grey" : "has-background-success has-text-white"

  return (
    <div className={`has-text-centered ${colorClasses}`}>
      <h3 className="has-text-weight-semibold is-size-4">Average Exam Score</h3>
      <h2 className="has-text-weight-bold is-size-3">{avgScore ? avgScore : 0}</h2>
    </div>
  )
}

AverageDisplay.propTypes = {
  avgScore: PropTypes.number
}
