# Asynchronicity

Sometimes, we have a dependency on a process which may take a long time.

We know what we want to happen when it finishes, but we don't want all our code to wait for it to finish.

This is called **asynchronicity**.

In our JavaScript applications, it will most often happen when fetching information from an external service, like an API or a database.

## Callbacks

Remember that callbacks allow us to customise the consequence of running a function.

## Promises

JavaScript has a built-in class called Promise which is built for asynchronicity.

Promises allow us to return a guarantee that a task is ongoing and allow us to chain side effects to the completion (or error) of that task.

### `.then()`

For when things complete normally, we can specify what to happen next with `.then()`.

### `.catch()`

For when things go wrong, we can handle the bad with `.catch()`.

### `async` and `await`

To make our code more linear, we can indicate that inside a function, we want to `await` a Promise.
Essentially, this makes the rest of the code into a `.then()` callback.
In practice, it means more readable code.

## Troubleshoot guide

Having promise problems? Check below.

### Forgotten `async`

```js
  const princess = await findPrincessAsync()
                   ^^^^^

SyntaxError: await is only valid in async functions and the top level bodies of modules
```

If you see a message like the one above, check that your `function` has the `async` keyword before it.

### Forgotten `await`

```
Hello, [object Promise]!
```

If you see console messages that contain `Promise`, you may have forgotten to `await` the promise.