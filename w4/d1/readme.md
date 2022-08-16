---
layout: default
permalink: /:path/
title: 'How the internet works, and asynchronicity'
parent: 'Week 4: Serving Data'
has_children: true
nav_order: 1
---

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

For more on this, see [our notes about asynchronicity](./3-asynchronicity).
