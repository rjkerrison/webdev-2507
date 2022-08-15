# Asynchronicity

Sometimes, we have a dependency on a process which may take a long time.

We know what we want to happen when it finishes, but we don't want all our code to wait for it to finish.

This is called **asynchronicity**.

In our JavaScript applications, it will most often happen when fetching information from an external service, like an API or a database.

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
