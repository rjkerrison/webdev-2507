---
layout: default
permalink: /:path/:basename
title: 'File upload'
parent: 'Week 5: Advanced Backend'
has_children: true
nav_order: 4
---

# Uploading Files

To upload files to cloudinary we are going to need a few modules:

- `multer`
- `cloudinary`
- `multer-storage-cloudinary`

See the lesson or their documentation to understand which one does what 😄.

## Creating the needed middleware

We will need a middleware to read the files we are sending and upload it to cloudinary:

```js
{% include_relative file-upload/middlewares/isAuthenticated.js %}
```

Let's not forget to add the needed variables to our `.env` file !

## Using the middleware

```js
router.post(
  '/',
  uploader.single(
    'image'
  ) /** the 'image' field is important as it should match the name of the field the image is located at (See postman) */,
  async (req, res, next) => {
    // We still have access to the request body
    console.log(req.body)
    // The uploader will append the uploaded image under the `req.file` key.
    console.log(req.file)
    const { name } = req.body
    let catPic
    // Verify if there is a file, if there is, get the url (path) the uploader provided you with.
    if (req.file) {
      catPic = req.file.path
    }
    // Create the cat 😸
    try {
      const createdCat = await Cat.create({ name: name, url: catPic })
      res.status(201).json({ message: 'Cat created', cat: createdCat })
    } catch (error) {
      next(error)
    }
  }
)
```
