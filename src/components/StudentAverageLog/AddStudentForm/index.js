import React from 'react'
import PropTypes from 'prop-types'

export const AddStudentForm = ({ handler }) => {

  return (
    <form onSubmit={handler}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" />
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" />
      <label htmlFor="score">Exam Score</label>
      <input id="score" min="0" max="100" type="number" />
      <button type="submit">Add Student</button>
    </form>
  )
}

AddStudentForm.propTypes = {
  handler: PropTypes.func
}
