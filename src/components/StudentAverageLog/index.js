import React, { useState } from 'react'

import { AddStudentForm as Form } from './AddStudentForm'
import { AverageDisplay } from './AverageDisplay'
import { StudentTable as Table } from './StudentTable'

export const StudentAverageLog = () => {
  const [students, setStudents] = useState([])

  const handleAddStudent = (e) => {
    e.preventDefault()

    const formInputs = Array.from(e.target.elements).filter(el => el.id)

    const newStudent = formInputs.reduce((acc, input) => {
      acc[input.id] = input.value
      return acc
    }, {})

    setStudents([...students, newStudent])
  }

  return (
    <div>
      <h1>Student Average Log</h1>
      <AverageDisplay />
      <Form handler={handleAddStudent} />
      <Table />
    </div>
  )
}
