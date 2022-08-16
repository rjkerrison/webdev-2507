---
layout: default
permalink: /:path/:basename/
parent: MongoDB
grand_parent: 'Week 4: Serving Data'
nav_order: 3
---

# Data Models

Modelling data is easy to do.

We want to think about our data as little JSON documents, with fields.

```json
{
  "_id": 1947,
  "films": [
    "The Three Caballeros",
    "Who Framed Roger Rabbit",
    "The Little Mermaid"
  ],
  "tvShows": ["DuckTales", "Bill Nye the Science Guy"],
  "parkAttractions": [
    "It's a Small World",
    "Festival of Fantasy Parade",
    "World of Color"
  ],
  "name": "Donald Duck",
  "imageUrl": "https://static.wikia.nocookie.net/disney/images/d/db/Donald_Duck_Iconic.png",
  "url": "https://api.disneyapi.dev/characters/1947"
}
```

Take this example representing Donald Duck.
We have a lot of fields, with different types.

| field      | type       | Donald Duck's value                                          |
| ---------- | ---------- | ------------------------------------------------------------ |
| `_id`      | `number`   | `1947`                                                       |
| `films`    | `string[]` | `["The Three Caballeros", "Who Framed Roger Rabbit", etc]`   |
| `tvShows`  | `string[]` | `["DuckTales", etc]`                                         |
| `name`     | `string`   | `"Donald Duck"`                                              |
| `url`      | `string`   | A URL for [Donald Duck on Disney API][donald]                |
| `imageUrl` | `string`   | A URL for this incredible image: ![Donald Image][donald img] |

For our data to be useful to API users (developers, including us!),
it makes sense to make the field names and types consistent across all documents in our collection.

If we want to filter for other characters who were in _Who Framed Roger Rabbit?_, it would be helpful if they also had a `films` field which is an array of strings.

When we're creating a database collection,
we define the rules and expectations about the data
about the fields inside the documents.

We call these expectations the **data model**.
When we can describe the model in code, that code is known as a **schema**.

## Relations

We can create relationships between our documents by having them refer to another document.

Imagine we have a _films_ collection.

```json
{
  "_id": 9978787,
  "name": "Who Framed Roger Rabbit?",
  "director": "Robert Zemeckis",
  "releaseYear": 1986
}
```

We might want our Donald Duck to relate to this _Who Framed Roger Rabbit?_ instead of having a string.

How can we link Donald to Roger?

### The Foreign Id

The concept of a _foreign id_ is that we record the unique `_id` of a document from another collection as a way of referencing that document uniquely.

```json
{
  "_id": 1947,
  "films": [9978787],
  "name": "Donald Duck"
}
```

In this way, whenever we need to know _more information_ about the films in which Donald Duck starred,
we can use each film's id (e.g. `9978787`) to look up information about those films from the _films_ collection.

## Embedding

With MongoDB, we can also have miniature documents inside of bigger documents.

```json
{
  "_id": 1947,
  "films": [
    {
      "name": "Who Framed Roger Rabbit?",
      "director": "Robert Zemeckis",
      "releaseYear": 1986
    }
  ],
  "name": "Donald Duck"
}
```

However, there are some flaws with this plan.

### Duplication

Embedding documents causes duplication.

```json
[
  {
    "_id": 1947,
    "films": [
      {
        "name": "Who Framed Roger Rabbit?",
        "director": "Robert Zemeckis",
        "releaseYear": 1986
      }
    ],
    "name": "Donald Duck"
  },
  {
    "_id": 1,
    "films": [
      {
        "name": "Who Framed Roger Rabbit?",
        "director": "Robert Zemeckis",
        "releaseYear": 1986
      }
    ],
    "name": "Mickey Mouse"
  }
]
```

We have stored information about Roger Rabbit twice!

Duplication is bad for two reasons:

1. waste
2. inconsistency

While both of these words are related to poop, in database terms, they are poop.

We want to be efficient with our database, and refrain from storing the same thing twice or more.
If we're storing the same information in many places, our database is not optimised,
and we may be paying more than necessary, as well as having slower performance.
Duplicating is a **waste** of our database's space and processing resources.

We aim to have a _single source of truth_ for every piece of information.

A _single source of truth_ is also good because we can query more easily,
and when we update the single source of truth,
we know that the information therein is still correct.

When we have _multiple sources of truth_, we have to update all of them every time something changes,
otherwise we will have **inconsistencies**.

### Document size

Another issue with embedding documents is the ballooning document size.

If Donald has starred in 1000 films and each film has 16 kilobytes of information, then Donald's document size will surpass the 16 megabyte limit imposed by

Even before hitting the limit, large documents are slower to process, to receive from the database, to update, and to send to API users.

In summary, large documents are bad.

### Querying embedded documents

While it is possible to query embedded documents with MongoDB,
it can be slower, it can be more difficult to build the queries,
and duplication can waste our resources as we query the same information numerous times.
