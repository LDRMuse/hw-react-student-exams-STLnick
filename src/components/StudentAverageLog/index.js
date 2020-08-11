import React from 'react'

import { AddStudentForm as Form } from './AddStudentForm'
import { AverageDisplay as Display } from './AverageDisplay'
import { StudentTable as Table } from './StudentTable'

export const StudentAverageLog = () => {

  return (
    <div>
      <h1>Student Average Log</h1>
      <Display />
      <Form />
      <Table />
    </div>
  )
}
