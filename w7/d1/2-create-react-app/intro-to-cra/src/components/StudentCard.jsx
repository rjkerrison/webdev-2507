// ./src/components/StudentCard.js
import './StudentCard.css'

function StudentCard({ name, cohort, removeStudent }) {
  if (name === 'Robin') {
    return (
      <article className="student-card">
        <h3>TEACHER {name}</h3>
      </article>
    )
  }

  return (
    <article className="student-card">
      <h3>{name.length > 10 ? name.substring(0, 10) + '…' : name}</h3>
      {cohort && <p>Cohort: {cohort}</p>}
      <button onClick={removeStudent}>Remove</button>
    </article>
  )
}

export default StudentCard
