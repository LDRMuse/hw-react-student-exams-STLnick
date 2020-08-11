import React from 'react'
import PropTypes from 'prop-types'

export const AddStudentForm = ({ handler }) => {

  return (
    <form className="has-background-white-ter has-text-centered py-4" onSubmit={handler}>
      <div className="field is-horizontal is-grouped is-grouped-centered">
        <div className="pl-2">
          <label className="label" htmlFor="firstName">First Name</label>
          <input className="input" id="firstName" type="text" />
        </div>
        <div className="pl-2">
          <label className="label" htmlFor="lastName">Last Name</label>
          <input className="input" id="lastName" type="text" />
        </div>
        <div className="pl-2">
          <label className="label" htmlFor="score">Exam Score</label>
          <input className="input" id="score" min="0" max="100" type="number" />
        </div>
      </div>
      <button className="button has-text-weight-semibold is-outlined is-dark" type="submit">Add Student</button>
    </form>
  )
}

AddStudentForm.propTypes = {
  handler: PropTypes.func
}
