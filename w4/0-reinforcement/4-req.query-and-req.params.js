import express from "express";

const app = express();
const port = 3000;


// Dynamic URL path. Accessible on request.params
// This handles all get requests on the /books/something route, "something" can be anything
app.get(`/books/:bookId`, (request, response) => {
  const { bookId } = request.params;

  // For a request on "http://example.com/books/98329", bookId is "98329"
  // For a request on "http://example.com/books/jfuebks", bookId is "jfuebks"
  // For a request on "http://example.com/books/hello", bookId is "hello"
  // For a request on "http://example.com/books/something", bookId is "something"

  //...
})


// URL parameters. Accessible on request.query
// URL parameters allow us to communicate extra information as key=value pairs
// example: `http://example.com/books?title=1984&author=george-orwell`
app.get(`/books`, (request, response) => {
  const { title, author } = request.query;

  // For our example, title is "1984" and author is "george-orwell"

  //...
})


app.listen(
  port,
  () => console.log(`app listening on port ${port}!`)
);