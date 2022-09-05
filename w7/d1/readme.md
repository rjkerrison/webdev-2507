---
layout: default
permalink: /:path/
parent: 'Week 7: Intro to React'
has_children: true
nav_order: 1
---

# JSX, components, and props

Today we'll cover JSX, components, and props.

To get started with react, we'll use the react starter.

```sh
npx create-react-app@latest intro-to-react
```

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

### Import and export

We define them in their own files, e.g. `./src/components/Headline.jsx`:

```jsx
import React from 'react'

const Headline = () => {
  return <h1>My Cool App</h1>
}

export default Headline
```

We can use a component elsewhere by _importing_ it and _rendering_ it.

```jsx
// App.js
import Headline from './components/

const App = () => {
  return (
    <div>
      <Headline />
    </div>
  )
}
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

Props are our way of configuring a component.

We define them with a syntax that looks like HTML attributes.

```jsx
<Button text="Accept" isFancy={true} />
```

We can read them in our component as the properties of its first parameter `props`, which is a JS object containing all the attributes we gave when rendering to the component.

```jsx
// Attributes on React component elements are accessible
// as 'props' – an object where the property names match the attribute names
const Button = (props) => {
  console.log(props)

  return (
    <button className={props.isFancy ? 'fancy-button' : 'regular-button'}>
      {props.text}
    </button>
  )
}

export default Button
```

## Snippets

When defining components, we have a lot of repeated code structure.

We installed the [React Snippets extension][extension] which allows us to create React code with snippets, such as:

- `rafce`: generates a React arrow function component and an export statement
- `rfce`: same, but a function declaration instead of an arrow function

## React DevTools

The React team created the React DevTools, an extension for Firefox and Chrome which allows you to view your page as React components.

- [React DevTools for Firefox][firefox devtools]
- [React DevTools for Chrome][chrome devtools]

[firefox devtools]: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/
[chrome devtools]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
[extension]: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
