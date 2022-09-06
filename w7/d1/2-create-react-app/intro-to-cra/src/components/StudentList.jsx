// ./src/components/StudentList.js

import { useState } from 'react'
import AddStudentForm from './AddStudentForm'
import StudentCard from './StudentCard'

function StudentList() {
  const [students, setStudents] = useState([
    {
      name: 'Paul',
      cohort: 'WebDev 2507',
    },
  ])

  return (
    <div>
      <AddStudentForm
        addNewStudent={(student) => setStudents([...students, student])}
      />

      <h2>Student List</h2>
      {students.map((student) => {
        return (
          <StudentCard
            name={student.name}
            week={7}
            info={{ city: 'PAR', course: student.cohort }}
          />
        )
      })}

      <StudentCard name="Eva" week={7} info={{ city: 'BCN', course: 'WEB' }} />

      <StudentCard name="Mat" week={8} info={{ city: 'MIA', course: 'DATA' }} />
      <StudentCard
        name={'Marko'}
        week={7}
        info={{ city: 'PAR', course: 'WEB' }}
      />
    </div>
  )
}

export default StudentList
