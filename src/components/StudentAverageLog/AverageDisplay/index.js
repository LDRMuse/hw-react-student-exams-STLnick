import React from 'react'
import PropTypes from 'prop-types'

export const AverageDisplay = ({ avgScore, numScores }) => {

  const colorClasses = avgScore < 70 ? "has-background-warning has-text-grey" : "has-background-success has-text-white"

  return (
    <div className={`has-text-centered ${colorClasses}`}>
      <h3 className="has-text-weight-semibold is-size-4">Average Exam Score</h3>
      <h2 className="has-text-weight-bold is-size-3">{avgScore}</h2>
      <p>Calculated from <span className="has-text-weight-semibold">{numScores}</span> Exams</p>
    </div>
  )
}

AverageDisplay.propTypes = {
  avgScore: PropTypes.string,
  numScores: PropTypes.number
}
