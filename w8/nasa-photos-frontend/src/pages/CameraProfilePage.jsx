import React from 'react'

const CameraProfilePage = ({ full_name, rover }) => {
  return (
    <div>
      <h2>
        Photos taken by the {full_name} for {rover.name}
      </h2>
    </div>
  )
}

export default CameraProfilePage
