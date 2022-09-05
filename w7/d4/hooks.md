---
layout: default
permalink: /:path/:basename/
grand_parent: 'Week 7: Intro to React'
parent: 'Hooks and routing'
nav_order: 1
---

# Hooks

React's component lifecycle has three phases:

1. **Mounting**, when the component has an initial render to the DOM
2. **Updating**, when the component's `state` or `props` change, causing a new render in the DOM
3. **Unmounting**, when the component is removed from the DOM

**Updating** can happen numerous times during the life of a component.

## `useEffect`

When we want to run a side effect for our component, we can declare it by passing a function to React's `useEffect` hook.

```jsx
// it looks like this
useEffect(() => {}, [])

useEffect(effect, dependencies)
```

Every `effect` runs on **mount**.

An `effect` will run whenever a value in its `dependencies` has changed in an **update**.

To run a cleanup task on **unmount**, we return a _cleanup function_ from our `effect`.

```jsx
useEffect(
  () => {
    // side effect statements (mount/update of a dependency)

    return () => {
      // cleanup (unmount)
    }
  },
  [
    /* dependencies */
  ]
)
```
