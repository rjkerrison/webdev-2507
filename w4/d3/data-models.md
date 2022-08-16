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
| `id`       | `number`   | `1947`                                                       |
| `films`    | `string[]` | `["The Three Caballeros", "Who Framed Roger Rabbit", etc]`   |
| `tvShows`  | `string[]` | `["DuckTales", etc]`                                         |
| `name`     | `string`   | `"Donald Duck"`                                              |
| `url`      | `string`   | A URL for [Donald Duck on Disney API][donald]                |
| `imageUrl` | `string`   | A URL for this incredible image: ![Donald Image][donald img] |

For our data to be useful to API users (developers, including us!),
it makes sense to make the field names and types consistent across all documents in our collection.

If we want to filter for other characters who were in _Who Framed Roger Rabbit?_, it would be helpful if they also had a `films` field which is an array of strings.

## Relations

The core of any database is the four operations we need to perform:

- Create
- Read
- Update
- Delete

### Embedding

Starting from an empty collection, we need to _create_ our first record.

This is also known as an _insert_.

Usually in a database, we will insert a new record into a particular named collection.
This helps to organise data for later use.

### Read

Once we have available data, we usually want to see it.
Retrieving data that has already been created from a database is known as _reading_.

This is also known as a _select_.

**Reading isn't easy!**
We have to specify exactly what we're looking for.
We may be searching for many matching data,
or alternatively we may be looking for a single datum by a unique identifier.

### Update

Often, we need to change an existing datum.
We call this _updating_.

Updating is complicated.
It involves _selecting_ the right existing records,
and applying a change.

### Delete

Sometimes, data is no longer useful, necessary, or desired.
Othertimes, we are legally obligated to remove it.

We can _delete_ data from our databases.

This may also be called a _remove_ operation.

Deleting is **frighteningly easy**.
When deleting, we have to be sure we're deleting the correct data.
It is very easy to delete all the records in a collection accidentally.

The hard part is **deleting the right thing** – we need to be even more vigilant than when reading.
It's advisable to use a unique identifier to find records when deleting.

[donald img]: https://static.wikia.nocookie.net/disney/images/d/db/Donald_Duck_Iconic.png
[donald]: https://api.disneyapi.dev/characters/1947
