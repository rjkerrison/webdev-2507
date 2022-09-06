import { useState } from 'react'

const AddStudentForm = ({ addNewStudent }) => {
  const [name, setName] = useState('')
  const [cohort, setCohort] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    addNewStudent({ name, cohort })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cohort">Cohort</label>
        <input
          id="cohort"
          type="text"
          value={cohort}
          onChange={(event) => {
            setCohort(event.target.value)
          }}
        />
      </div>

      <input type="submit" value="Add Student" />
    </form>
  )
}

export default AddStudentForm
