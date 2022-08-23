---
layout: default
permalink: /:path/
parent: 'Week 5: Advanced Backend'
has_children: true
nav_order: 2
---

# Authentication and Authorization

Today we'll see

- user models
- password encryption
- [user creation endpoints (sign up)](#steps-to-create-a-user)
- [user authentication endpoints (log in)](#steps-to-login-a-user)
- [protected routes](#protecting-a-route)
  - `isAuthenticated` middleware
- user roles

## Steps to create a user

- Get the informations the user sent through the request body.
- Try to find a user with the same username / email.
  - if you find one, ask him to login instead.
- Hash the password.
- Create the user with the hashed password.

## Steps to login a user

- Get the informations the user sent through the request body.
- Try to find the user.
  - If you can't find him, let him know that his credentials are wrong.
- Compare the password
  - If they don't match, let the user know his credentials are wrong.
- Create the token to be sent

## Protecting a route

Protecting a route means that you want it to be accessible to only some users, it can be:

- A logged-in user
- A non logged user
- An admin
- ...

To do so, we will need to verify, before entering in the route that the user doing the request match our criteria.

Our routers accept any number of argument after the string endpoint. All of those arguments will receive the `request`, `response` objects and the `next` function.
The request is the same object for each middleware/route handler over the request lifetime.

The `next` function, when invoked with no arguments will go to the next middleware.

<!--
```js
{% include_relative  %}
```
 -->

### isAuthenticated middleware

We would like to verify if someone is authenticated / logged in.
Since we are using a token based authentication, the client need to send his token in the `headers` of the `request`, under the `authorization` key.
We will then verify the token and authorize (or not) the user.
