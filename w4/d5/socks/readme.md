---
layout: default
permalink: /:path/
parent: Express and Mongoose
grand_parent: 'Week 4: Serving Data'
has_children: true
nav_order: 3
---

# Socks API

Todo list:

- [x] initialised npm package
- [x] installed dependencies (mongoose and express)
- [x] created gitignore
- [x] Models folder with models
  - [x] Schemas
- [x] Creating database
- [x] Connect to the database
- [x] js entry point (app.js)
  - [x] create an express app
  - [x] listen
- [ ] Add some default socks info (seeding)
- [x] routes
  - [x] Create socks
  - [x] Read socks
  - [x] Update socks
  - [x] Delete socks

## The code

We have many files in an API.

We need to create the server, the models, and the routes.

### `app.js`

```js
{% include_relative app.js %}
```

### `models/Sock.model.js`

```js
{% include_relative models/Sock.model.js %}
```

### `routes/Socks.routes.js`

```js
{% include_relative routes/Socks.routes.js %}
```
