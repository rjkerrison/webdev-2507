---
layout: default
permalink: /:path/:basename/
parent: Express and Mongoose
grand_parent: 'Week 4: Serving Data'
nav_order: 1
---

# HTTP vs CRUD

Today, we will learn to

- **C**reate a document in our `POST` routes
- **R**ead from our database inside our `GET` routes
- **U**pdate in our `PUT` routes
- **D**elete in a `DELETE` route

Let's **CRUD** this!

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

## Conclusion

By convention, the CRUD operation we perform in the database relates to the
HTTP method used.

| HTTP Method  | CRUD Operation |
| ------------ | -------------- |
| POST         | Create         |
| GET          | Read           |
| PUT or PATCH | Update         |
| DELETE       | Delete         |

This may not always be exactly what happens,
but it's a useful guideline to think about
how incoming web traffic should relate to our data storage.
