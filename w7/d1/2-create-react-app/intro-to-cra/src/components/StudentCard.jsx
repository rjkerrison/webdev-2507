// ./src/components/StudentCard.js
import React from 'react'

function StudentCard({ name, info, week }) {
  return (
    <div className="StudentCard">
      <p>Name:{name}</p>
      <p>
        Cohort:{info.city} - {info.course}
      </p>
      <p>Current week: {week}</p>
    </div>
  )
}

export default StudentCard
