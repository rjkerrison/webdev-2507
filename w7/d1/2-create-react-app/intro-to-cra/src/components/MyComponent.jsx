import React from 'react'

const MyComponent = (props) => {
  console.log('PROPS FOR MyComponent', props)
  console.log('PROPS.CHILDREN', props.children)

  return (
    <div>
      <h2>I have these children elements</h2>

      {props.children}
    </div>
  )
}

export default MyComponent
