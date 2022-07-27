# HTML

Our goals are to know how to:

- Write a tag, an attribute
- Understand the tree
- Choose semantic tags

Definitions we'll know:

- _tag_
- _attribute_
- _DOM_

Top tip: the `html:5` Emmet abbreviation. Can also be done with just `!`.

## Purpose of HTML

The purpose of the _hypertext markup langauge_ is to **mark up** hypertext. Also, it's a **language**.

_Hypertext_ is text, but better. It could also have been called _supertext_.

| Text              | Supertext               |
| ----------------- | ----------------------- |
| ![Some dude][man] | ![Action Comics 1][ac1] |

What makes _hypertext_ better than regular _text_ is the ability to link from one place in the text to another.
Such a link are therefore called a _hyperlink_ to stick with the _hyper-_ concept. These were also called _anchors_.

Wwe can also add much more information about the purpose of all those words and symbols. This is what we mean by _marking up_ content.

Web browsers give users a particular experience (ostensibly a good user experience) based on our markup.
There are now standards to which web browsers adhere, which makes our lives simpler, but they're still able to do things differently to one another.

Ultimately, this difference in how browsers treat our markup is the concern of those browsers and their users.

Our job:

- ✅ is to give the most meaningful, useful markup,
- ✅ is to understand what we mean,
- ✅ is to be aware of how our markup can be interpreted by user clients\*
- ❌ is not to make all browsers behave exactly the same, although often designers, product owners, quality analysts, and even developers will mistake our job for this.

\*_user client_ includes web browsers as well as other software that interprets HTML on a user's behalf.
Think about smart devices that can search online for you, or tools that gather news sources into a feed.

## Semantic HTML

When we're talking about giving the most meaningful markup, that can also be described as being _semantic_: meaningful.

When we talk about _semantic HTML_ we mean tags and attributes whose jobs are to add (agreed) meaning to our markup.
We can also have non-semantic tags and non-semantic attributes.

Examples of semantic tags:

- headings
- `article`
- `picture`
- `ol`

Examples of non-semantic tags:

- `div`
- `span`
- `img`

Arguable: `p`

Examples of semantic attributes:

- `aria-hidden`

Examples of non-semantic attributes:

- `data-owner`

## Exercises

We'll go onto websites in pairs and find as many tags as we can.

Each pair will discuss if the tags are semantic or non-semantic.

We'll then bring them together as a group and sort them into semantic and non-semantic.

[man]: https://previews.123rf.com/images/andreypopov/andreypopov1506/andreypopov150600537/41318426-man-trying-to-lift-the-car-with-red-hydraulic-floor-jack-for-repairing.jpg
[ac1]: https://www.hellobricks.com/wp-content/uploads/2015/06/action-comics-1.jpg
