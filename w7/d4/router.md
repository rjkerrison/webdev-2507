---
layout: default
permalink: /:path/:basename/
grand_parent: 'Week 7: Intro to React'
parent: 'Hooks and routing'
nav_order: 2
---

# React Router

We use the `react-router-dom` package to mimic browser page behaviour.

A route looks like

```jsx
<Route path="/contact-us" element={<ContactUs />} />
```

where `ContactUs` is a component defined in `./pages/ContactUs.jsx`.

## Links

To prevent a browser navigation, we use a React Router link element.

```jsx
<Link to="/about">About</Link>
```

## Navigate

Sometimes, we want to redirect the user. We do so with the `Navigate` element.

```jsx
<Navigate to="/error" />
```

## Route parameters

Route parameters allow us to create dynamic pages.

We can define our route with a parametrised identifier.

```jsx
<Route path="/schools/:id" element={<School />} />
```

Inside our page, we can retrieve the current value of `id` from the real URL with `useParams()`.

```jsx
const School = () => {
  const { id } = useParams()

  return <p>School with id: {id}</p>
}
```

### `useParams()` Example

In ['./full-stack-app'](./full-stack-app), we have the following example use case of a URL parameter id.

<img width="1114" alt="Screenshot 2022-06-23 at 15 00 52" src="https://user-images.githubusercontent.com/7150842/175308049-1916a754-6a17-4139-b851-2d41242daa0b.png">
