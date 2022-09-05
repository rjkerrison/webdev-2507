---
layout: default
permalink: /:path/
parent: 'Week 7: Intro to React'
nav_order: 2
---

# React State

React only rerenders when necessary. Otherwise, everything is immutable: it never changes.

To get React to rerender our functional components, we have to _hook into_ its _state management_ with… the **`useState` hook**.

## `useState()`

The state hook returns an array containing a **state value** and its linked **state setter**.

If we call the state setter with a new value, React will rerender the current component with _the given value as the new state value_.

```jsx
const [count, setCount] = useState(0)
```

In this example, `count` is initialised to `0`.
Whenever we call `setCount` with a new value,
React will rerender this component with `count` as the new value.

```jsx
import React, { useState } from 'react'

const Counter = () => {
  // telling React that count is *stateful*
  const [count, setCount] = useState(0)

  const increaseCount = (increment) => {
    // tell React to re-render this component with the new value provided
    setCount(count + increment)
  }

  return (
    <section className="counter">
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={() => increaseCount(-1)}>-1</button>
        <button onClick={() => increaseCount(+1)}>+1</button>
      </div>
    </section>
  )
}

export default Counter
```

## Lists

Lists are simple: we map our data to an array of elements.

```jsx
const listItems = items.map((item) => {
  return <ListItem key={item} item={item} deleteTask={deleteTask} />
})
```

Every JSX element in an array should have a `key` attribute which is unique in the array.

## Forms

Forms take a bit of work, because we have to update the state whenever an input changes.

```jsx
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
```

Here, we're tracking our input's value as _name_ with a React state hook.

In the form itself, we use `onSubmit` to intercept the form submission.
We have to prevent the default behaviour, and then we can submit the form data.
In the example below, our form sends its data to the `addNewStudent` prop that it received.

```jsx
const AddStudentForm = ({ addNewStudent }) => {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    addNewStudent(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="Add Student" />
    </form>
  )
}
```

## Conditionals

There are three ways to render conditionally in React.

- Ternary operator, `?`
- Logical AND operator, `&&`
- Conditional `return` statements
