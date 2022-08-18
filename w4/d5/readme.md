---
layout: default
permalink: /:path/
parent: 'Week 4: Serving Data'
has_children: true
nav_order: 5
---

# Express and Mongoose

We've seen how express can define for us _routes_.

We've seen how mongoose can query for us the database.

What if we brought them together?

Today, we will learn to

- **C**reate a document in our `POST` routes
- **R**ead from our database inside our `GET` routes
- **U**pdate in our `PUT` routes
- **D**elete in a `DELETE` route

Let's **CRUD** this!

But first: let's [recap for week 4](./cfu.html)!

## Creating

When a user makes a _POST_ request to our server,
we usually want to create some record as a result.

Examples:

- I _POST_ the content for a hilarious new tweet
- I _POST_ a beautiful new picture of myself at the Eiffel Tower to Instagram
- I _POST_ a dance video to Tiktok
- I _POST_ an order for a better camera to _camerasforinfluencers.com_

In every case, the website will need to store the information I've sent.
They will need to create a record in a database.

### Media files and the database

In the case of the Tiktok video and the Instagram photo,
the server will upload these to a file storage service.
The database will store some unique identifier of the file, which can be used for retrieving it later.

A database is not for storing images, but it can store an _imageUrl_ field.

A database is not for storing videos, but it can store a _videoUrl_ field.

## Reading

When a user makes a _GET_ request,
we usually want to read documents from our database.

## Updating

If a user makes a _PUT_, it's time to update a database document.

## Deleting

If the user makes a _DELETE_ request, guess what we're going to do!
That's right, we'll delete a database document.
