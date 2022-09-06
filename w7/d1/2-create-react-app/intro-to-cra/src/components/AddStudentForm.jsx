import { useState } from 'react'

const AddStudentForm = ({ addNewStudent }) => {
  const [name, setName] = useState('')
  const [cohort, setCohort] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name) {
      setError(true)
    } else {
      setError(false)
      addNewStudent({ name, cohort })
    }
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
        {error && <p>Error! You must provide a name</p>}
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
