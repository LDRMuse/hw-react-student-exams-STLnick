import React, { useEffect, useState } from 'react'

import { AddStudentForm as Form } from './AddStudentForm'
import { AverageDisplay } from './AverageDisplay'
import { StudentTable as Table } from './StudentTable'

import 'bulma/css/bulma.css'

export const StudentAverageLog = () => {
  const [students, setStudents] = useState([])
  const [averageScore, setAverageScore] = useState(0)

  const calcAverageScore = () => {
    setAverageScore(Number.parseFloat(students.reduce((acc, student) => {
      acc += Number(student.score)
      return acc
    }, 0) / students.length).toFixed(1))
  }

  useEffect(() => {
    calcAverageScore()
  }, [students])

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
      <AverageDisplay avgScore={averageScore} />
      <Form handler={handleAddStudent} />
      <div className="columns mt-3">
        <div className="column"></div>
        <div className="column is-two-thirds">
          <Table students={students} />
        </div>
        <div className="column"></div>
      </div>

    </div>
  )
}
