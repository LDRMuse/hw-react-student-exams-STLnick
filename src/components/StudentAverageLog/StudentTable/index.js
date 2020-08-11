import React from 'react'
import PropTypes from 'prop-types'

import { Student } from './Student'

export const StudentTable = ({ students }) => {

  const renderStudents = () => students.map(({ firstName, lastName, score }, i) => {
    return <Student key={i} first={firstName} last={lastName} score={score} />
  })


  return (
    <table>
      <thead>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Exam Score</td>
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
