---
layout: default
permalink: /:path/
parent: 'Week 7: Intro to React'
has_children: true
nav_order: 5
---

# Connecting a React frontend to the backend

Today, we're going over the process of calling our backend API from our frontends.

## Axios

To help us out, `axios` exists. We'll install it to our app, and use it.

```
npm install axios
```

To import it, it's

```jsx
import axios from 'axios'
```

To use it, we can use `axios(config)` where `config` defines our `method`, `url`, and `headers` as necessary,
or we can use shorthands like `axios.get(url)`.

### Make your GET requests in a `useEffect`

When mounting a component, we need to fetch relevant information from our API.

Once we receive the data, we need to store it in state.

```jsx
import { useState, useEffect } from 'react'
import axios from 'axios'

const BicycleList = () => {
  const [bicycles, setBicycles] = useState([])

  useEffect(() => {
    // Here, we make the request with axios
    axios
      .get('http://myapi.example.com/api/bicycles')
      .then((response) => {
        if (response.status === 200) {
          // We define what to do if the GET returns 200 OK
          setBicycles(response.data)
        } else {
          // What to do in the event of an unexpected status code
          // In some applications, you may want to be more precise here, and handle 404, 401, 201 etc differently.
          setErrorMessage('Could not retrieve bikes')
        }
      })
      .catch(() => {
        // What to do in the event of an error during the call
        setErrorMessage('Could not retrieve bikes')
      })
  }, [])

  return (
    <div className="bikes-container">
      {bicycles.map((bicycle) => (
        <BicycleCard {...bicycle} />
      ))}
    </div>
  )
}
```

We make the request in a `useEffect` because we only want to do it _when mounting the component_.

### Make your `POST` requests in an event handler

In general, we only want to POST as a result of a user form submission.

```jsx
const AddBicycleForm = () => {
  const [brand, setBrand] = useState('')
  const [gearCount, setGearCount] = useState(1)

  const handleSubmit = (event) => {
    // always prevent the default submission behaviour
    event.preventDefault()

    axios({
      method: 'POST',
      url: 'http://myapi.example.com/api/bicycles',
      // The hard part is sending the right data.
      // We have to be sure we're matching the format that the API expects.
      data: {
        brand,
        gears: gearCount,
      },
    }).then(() => {
      // reset the form
      // optionally redirect the user
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* inputs updating state */}
      {/* input with type=submit */}
    </form>
  )
}
```

## Form Validation

We can add checks in `handleSubmit` which verify the user has given valid data.
These are known as _validation checks_.

We may want to check a string has the right length, or matches a regex.
We may want to check that numbers are within a certain range.

If any of the validation checks fail, we can set a message in state, which we'll show to a user.

```jsx
const MyComponent = () => {
  const [someField, setSomeField] = useState(null)
  const [validationMessage, setValidationMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    // Validation checks are after preventing the default behaviour, before the axios call
    if (!isValidBySomeCriteria(someField)) {
      setValidationMessage(
        `SomeField value '${someField}' does not satisfy the so-and-so criterion.`
      )
      // It's essential to return early here to prevent the axios call.
      return
    }
    // ... axios call etc
  }

  return (
    <>
      {/* ... */}
      {validationMessage && (
        <p className="message validation">{validationMessage}</p>
      )}
    </>
  )
}
```

Here we would have defined the function `isValidBySomeCriteria` which can test the validity of `someField`.

Validation checks in our front-end are for **giving the user useful feedback**.
They are not about protecting data: our backend has to have the right policies in place to prevent invalid data from being saved to the database.
