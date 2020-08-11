import React, { useState } from 'react'

import { AddStudentForm as Form } from './AddStudentForm'
import { AverageDisplay } from './AverageDisplay'
import { StudentTable as Table } from './StudentTable'

export const StudentAverageLog = () => {
  const [students, setStudents] = useState([])

  return (
    <div>
      <h1>Student Average Log</h1>
      <AverageDisplay />
      <Form />
      <Table />
    </div>
  )
}
