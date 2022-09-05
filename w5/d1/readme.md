---
layout: default
permalink: /:path/
parent: 'Week 5: Advanced Backend'
has_children: true
nav_order: 1
---

# Advanced Express

Today we'll see

- custom error handling with express

  - for [`404 Not Found`](#404-and-error-handling)
  - for [`500 Internal Server Error`](#404-and-error-handling)

- handling relationships in mongoose
  - making multiple queries
  - `.populate()`
    ```js
    router.get('/:id', async (req, res, next) => {
      try {
        const { id } = req.params
        const oneMessage = await Message.findById(id).populate(
          'author receiver'
        )
        res.status(200).json(oneMessage)
      } catch (error) {
        next(error)
      }
    })
    ```

## 404 and Error handling

```js

{% include_relative 2-populate/error-handling/index.js %}
```
