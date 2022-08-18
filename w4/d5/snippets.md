---
layout: default
permalink: /:path/:basename/
parent: Express and Mongoose
grand_parent: 'Week 4: Serving Data'
nav_order: 2
---

# Snippets

Here are examples of each CRUD operation in express and mongoose.

## Creating inside a route

It looks like this.

```js
router.post('/restaurants', async (req, res) => {
  const { name, cuisine, rating } = req.body
  const restaurant = await Restaurant.create({
    name,
    cuisine,
    rating,
  })
  res.json({ restaurant })
})
```

## Reading inside a route

It looks like this.

```js
router.get('/restaurants', async (req, res) => {
  const restaurants = await Restaurant.find()
  res.json({ restaurants })
})
```

```js
router.get('/restaurants/:id', async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id)
  res.json({ restaurant })
})
```

## Updating inside a route

Updating looks a lot like doing a create and a read at the same time.

- We need to get fields from `req.body` as we do with create.
- We need to find by id with `req.params.id` as we do with read.

```js
router.put('/restaurants/:id', async (req, res) => {
  const { name, cuisine, rating } = req.body
  const restaurant = await Restaurant.findByIdAndUpdate(
    req.params.id,
    {
      name,
      cuisine,
      rating,
    },
    { new: true }
  )
  res.json({ restaurant })
})
```

## Deleting inside a route

Deleting is easy!

We reply with no content, and we indicate this with a status of `204 No Content`.

```js
router.put('/restaurants/:id', async (req, res) => {
  await Restaurant.findByIdAndDelete(req.params.id)
  res.sendStatus(204)
})
```
