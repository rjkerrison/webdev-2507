import express from "express";
// or
// const express = require(`express`);

const app = express();  // To create our express app
const port = 3000;

app.use(express.json());  // This parses incoming requests with a JSON payload

// Request handling
// This handles all get requests on the books route
// Like a traditional conditional statement, if the request method is "GET" and the path is "/books" the callback function runs
app.get(`/books`, (request, response) => {
  // This is a regular callback function
  // In this callback function we have access to the "request" and "response" objects and their respective properties and methods

  // To send back a response to whoever made the request, we use the .send() method available on the response object
  response.send(`Hello from the books route!`);
})

// This is similar to adding an event listener on an HTML Element. Our app is now listening for http requests on whichever port we pass it as the first argument. The second argument is function which will run when our app starts listening
app.listen(
  port,
  () => console.log(`app listening on port ${port}!`)
);