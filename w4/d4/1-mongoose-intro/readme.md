---
layout: default
permalink: /:path/
parent: Mongoose
grand_parent: 'Week 4: Serving Data'
nav_order: 2
---

# Mongoose

MongoDB, by default is schema-less, which mean that nothing prevent you from creating Documents that have a totally different structure, different fields.

Mongoose allow us to structurate and validate the informations we want to add / query inside of our database.

To do so, we can create Schemas and Models.

## Schema

A mongoose Schema is a document data structure (shape of the document), it is where we define how we want our data to be shaped.

## Model

A mongoose Model is a constructor that takes a schema and collection as parameter, it allow us to create, modify, find, delete documents in the specified collection.

## Installation

Install `mongoose` in your project folder using `npm install mongoose`

### Connect to the database

Connecting to the database is one of the first thing your server should do.

```js
const { default: mongoose } = require('mongoose')

const MONGO_URI = 'mongodb://localhost:27017/database_name'

async function openConnection() {
  await mongoose.connect(MONGO_URI)
}

module.exports = openConnection
```

Notice how we export the `openConnection` function!
This way we can require it in our `app.js` file and execute it to connect to the database.
search

## Model vs Schema

A Mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

## Creating a Model

Creating a model takes three steps:

- Import mongoose, get the `Schema` constructor and the `model` from `mongoose`

- Define your Schema:

```js
const mySchema = new Schema({...})
```

- Export the model:

```js
module.exports = model('myCollection', mySchema)
```

## Creating your Schema

Here are the finished examples from the lesson:

> Person model

```js
{% include_relative models/Person.model.js  %}
```

> RubberDuck model

```js
{% include_relative models/RubberDuck.model.js %}
```
