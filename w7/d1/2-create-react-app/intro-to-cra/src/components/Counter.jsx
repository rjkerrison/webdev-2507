import React from 'react'

import { useState } from 'react'
import Button from './Button'

const Counter = () => {
  // let counter = 0

  // React.useState returns the current value
  // and a function we can use to rerender with a new value
  const [counter, setCounter] = useState(0)
  // if we want to see the latest value of a React state variable,
  // console.log after declaring the useState
  console.log('current counter', counter)
  // const [value, setValue] = useState(initialValue)

  // this would cause an infinite rerender
  // setCounter(counter + 1)

  return (
    <>
      <Button
        text="+1"
        handleClick={() => {
          if (counter >= 5) {
            return
          }

          setCounter(counter + 1)
        }}
      />
      <Button
        text="-1"
        handleClick={() => {
          if (counter <= -5) {
            return
          }

          setCounter(counter - 1)
        }}
      />
      <Button text="Reset to 0" handleClick={() => setCounter(0)} />
      <p className="counter">Count: {counter}</p>
    </>
  )
}

export default Counter
