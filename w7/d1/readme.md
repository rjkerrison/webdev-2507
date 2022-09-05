---
layout: default
permalink: /:path/
parent: 'Week 7: Intro to React'
has_children: true
nav_order: 1
---

# JSX, components, and props

Today we'll cover JSX, components, and props.

## JSX

The first thing you need to know about React is its syntax.

It's called _JavaScript Extended Syntax_, but everyone just calls it _JSX_.

It looks like HTML inside JavaScript.

```jsx
const element = (
  <div>
    <h1>Hello world</h1>
    <p>lorem ipsum etc</p>
  </div>
)
```

## Components

The building blocks of React are called components.

They are a reusable part of a page, coupling of structure and functionality.

We create them as functions which return a JSX expression.

```jsx
const Component = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <p>lorem ipsum etc</p>
    </div>
  )
}
```

We use them as if they're an HTML tag.

```jsx
const element = (
  <div>
    <Component />
    <Component />
  </div>
)
```

## Props

Just as functions have _parameters_ to make them more reusable,
components have _props_.

_Props_ are properties we assign to React components to configure them.

When we receive them in our function components, they're available as fields on the first parameter.

```jsx
const Heading = (props) => {
  return <h1>{props.heading}</h1>
}
```

When we pass them into our components, they look like HTML attributes.

```jsx
const element = (
  <div>
    <Heading heading={'Hello world'} />
  </div>
)
```
