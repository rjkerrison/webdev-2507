// ./src/components/StudentList.js

import { useState } from 'react'
import './StudentList.css'

import AddStudentForm from './AddStudentForm'
import StudentCard from './StudentCard'

function StudentList() {
  const [students, setStudents] = useState([
    {
      name: 'Paul',
      cohort: 'WebDev 2507',
    },
  ])

  const addNewStudent = (student) => setStudents([...students, student])
  const removeStudent = (name) => {
    const allStudentsExceptCurrent = students.filter(
      (student) => student.name !== name
    )

    setStudents(allStudentsExceptCurrent)
  }

  return (
    <section>
      <h2>Student List</h2>
      <div className="student-list">
        <AddStudentForm addNewStudent={addNewStudent} />

        <div className="cards">
          {students.length === 0 ? (
            <p>No students!</p>
          ) : (
            students.map((student) => {
              return (
                <StudentCard
                  key={student.name}
                  name={student.name}
                  cohort={student.cohort}
                  removeStudent={() => removeStudent(student.name)}
                />
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}

export default StudentList
