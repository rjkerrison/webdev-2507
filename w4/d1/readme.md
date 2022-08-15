# Week 4 Day 1: How the internet works, and asynchronicity

Kicking off module 2, we looked at the core technology underpinning the World Wide Web, and how our webpages can dynamically access data through it.

## How the internet works

We discussed servers, protocols, APIs, and the Domain Name System.

1. [Basic HTTP server in node](./1-node-http-server/server.js)
2. [Using JSON to store data](./2-data/data.js)
3. [Weather API with Fetch](https://codepen.io/rjkerrison/pen/GRQxKyy)

## Asynchronicity

When communicating with the outside world, it is unknown how long a task can take.

To prevent our code from stopping due to an external dependency running slowly, we run certain tasks _asynchonously_.

We need to define the behaviour to perform as a consequence of the external task.
Although [this is possible with callbacks](./3-asynchronicity/1-callbacks.js), we usually use [promises](./3-asynchronicity/2-promises.js).

```js
{% include_relative ./3-asynchronicity/2-promises.js %}
```
