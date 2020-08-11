import React from 'react'
import PropTypes from 'prop-types'

import { Student } from './Student'

export const StudentTable = ({ students }) => {

  const renderStudents = () => students.map(({ firstName, lastName, score }, i) => {
    return <Student key={i} first={firstName} last={lastName} score={score} />
  })


  return (
    <table className="table is-fullwidth is-striped has-text-centered">
      <thead className="has-background-grey">
        <tr>
          <td className="has-text-weight-semibold has-text-white">First Name</td>
          <td className="has-text-weight-semibold has-text-white">Last Name</td>
          <td className="has-text-weight-semibold has-text-white">Exam Score</td>
        </tr>
      </thead>
      <tbody>
        {renderStudents()}
      </tbody>
    </table>
  )
}

StudentTable.propTypes = {
  students: PropTypes.array
}
