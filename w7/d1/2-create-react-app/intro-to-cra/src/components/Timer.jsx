import React, { useEffect } from 'react'

import { useState } from 'react'
import Button from './Button'

const Timer = () => {
  // let counter = 0

  // React.useState returns the current value
  // and a function we can use to rerender with a new value
  const [counter, setCounter] = useState(0)
  // if we want to see the latest value of a React state variable,
  // console.log after declaring the useState
  console.log('current counter', counter)
  // const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prev) => prev + 1)
    }, 100)

    // run a cleanup function in the unmounting phase
    return () => {
      console.log('Cleanup - Component Unmounting')
      clearInterval(id)
    }
  }, [])

  useEffect(() => {
    console.log('useEffect - on update')
    document.title = 'Timer is ' + counter
  }, [counter])

  return (
    <>
      <p className="counter">Time: {(counter / 10).toFixed(2)}</p>
    </>
  )
}

export default Timer
