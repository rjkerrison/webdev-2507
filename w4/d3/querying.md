---
layout: default
permalink: /:path/:basename/
parent: MongoDB
grand_parent: 'Week 4: Serving Data'
nav_order: 3
---

# Querying

Databases are great for searching huge datasets.

Unlike JavaScript where we have `.filter()` and the full power of scripting,
querying in a database is limited by what the database software allows.

Fortunately, MongoDB is very open-ended.

We'll be adding examples here.

## Examples

No query. Returns everything.

```
{}
```

String exact match.

```
{ name: 'Donald Duck' }
```
