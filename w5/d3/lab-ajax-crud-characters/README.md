![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Axios CRUD exercise

## Introduction

![image](https://user-images.githubusercontent.com/23629340/36733655-8c9903fa-1bd1-11e8-82f7-d425ab140c09.png)

In this exercise, we will use all what we have learned about APIs and how to connect an application to them through **Axios**.

## Requirements

- Fork this repo
- Then clone this repo

## Submission

- Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Iteration 1.1 The API

We will first create an **API** to then do an application to Create, Read, Update, and Delete characters from it. You will need to handle all the routing in `server/routes/characters.route.js` complete the routes using the following:

- **Verb:** GET, **Route:** "/characters"
  - It receives NO parameters
  - It returns the full characters list
  - It returns JSON
- **Verb:** GET, **Route:** "/characters/:id"
  - It receives the character ID as a parameter (route)
  - It returns the character with the indicated `id`
  - It returns JSON
- **Verb:** POST, **Route:** "/characters"
  - It receives an object as a parameter, with the following format:
    `{ name: string, occupation: string, cartoon: boolean, weapon: string }`
  - It returns the created character if there are no errors
  - It returns the wrong fields if there is some error
  - It returns JSON
- **Verb:** PATCH/PUT, **Route:** "/characters/:id"
  - It receives the character `id` as a parameter (route)
  - It receives an object as a parameter, with the following format:
    `{ name: string, occupation: string, cartoon: boolean, weapon: string }`
  - All the fields are optional
  - It returns the updated character if there are no errors
  - It returns "Character not found" if there is no character with the indicated `id`
  - It returns JSON / text
- **Verb:** DELETE, **Route:** "/characters/:id"
  - It receives the character `id` as a parameter (route)
  - It returns "Character has been successfully deleted" if there are no errors
  - It returns "Character not found" if there is no character with the indicated id
  - It returns text

### Iteration 1.2: The Seeding

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_99257e2c4240770e6b4bdd406d943ac8.png)

Checkout the seeds folder, let's decompose what it does:
```javascript
const Character = require('../models/Character.model')
const openConnection = require('../db/')
const mongoose = require('mongoose')
```
- Getting the Character model.
- Getting the function which allow us to connect to the database
- Requiring mongoose

Then, the `seedDatabase` function is:
- waiting for the database connection
- Waiting for the creation of our data in the database
- Disconnecting from the database.

Run the seed with node to create the data in your local database 😉

```bash
node path-to-your/seed-file.js
```


### Iteration 2: Getting data from the front-end

Once we have the results served by the API in the application, we will create the events that will handle with the CRUD operations.
To handle the requests, you can either use the native [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or [axios](https://axios-http.com/docs/intro)
If you want to use axios, remember that it will be used by the front-end, so you can't access it through node_modules, you will need to get it from a cdn by adding a script through your HTML page like this one :
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

We will now work in the `public/javascript/index.js`

#### Fetch all characters

![image](https://user-images.githubusercontent.com/23629340/36733634-7b6b6dca-1bd1-11e8-9803-5282681159ba.png)

Retrieve all the available characters in the API and show them in the application. In order to do that, we need to:

- Create a button (_Fetch all_ in the image above) which when clicked, will trigger a function that will handle the request.
- The function will return a JSON object with all the characters.
- Get the data and show the characters. Finally, with JavaScript, we will create a structure similar to a card (image above) to show detailed info about each character.

**Use the provided template element to create the cards**

#### Fetch one character

![image](https://user-images.githubusercontent.com/23629340/36733678-97ecd42a-1bd1-11e8-8e60-6aab38d632a0.png)

Following the same idea as with fetching all, to retrieve a single character's data we need to:

- Create a button (_Fetch one_ in the image above) to, through an input field, get an existing character using it's name.
- Search that character in the API with _[http://localhost:5000/characters/:name](http://localhost:5000/characters/:name)_
- Get the data and show the character info as a card.
- Don't forget to show the _id field !

#### Delete one character

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3d893f20f95e5b13369375cdfd7900a5.png)

To be able to delete a character from the API database, we need to:

- Create a button (_Delete_ one in the image above) to delete a character using it's `id`.
- Delete that character in the API with _[http://localhost:5000/characters/:id](http://localhost:5000/characters/:id)_
   <!-- :::danger -->
  **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
- If the character is successfully removed, change the background color of the button to green.
- If something went wrong, change the background color of the button to red.

#### Create new character

![image](https://user-images.githubusercontent.com/23629340/36733698-a7c64f8e-1bd1-11e8-9b7d-b37c7a800a27.png)

We will create a form with 4 inputs: name(text), occupation(text), weapon(text) and cartoon(checkbox).

- Create a submit button (_Create_ in the image above) to get all the data from the form.
- Create an event handler function for managing the form submission. To prevent the default form behaviour (page reload), use the [`event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) method.
- Send the data to a function to save the new character through _[http://localhost:5000/characters](http://localhost:5000/characters)_
- Here's how to send data in a request (!It returns a Promise!): 
```javascript
axios.post('/your-endpoint', {your: 'data', name: 'blob'})
```
   <!-- :::danger -->
  **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
- If the character was successfully created, set the background color of the button to green.
- If something went wrong, change the background color of the button to red.

#### Edit a character

![image](https://user-images.githubusercontent.com/23629340/36733714-b6257b36-1bd1-11e8-8518-c3f7e2ba034c.png)

We will create a form with 4 inputs: name(text), occupation(text), weapon(text) and cartoon(checkbox). Also, we will create a new input to indicate the `id` of the character we want to edit.

- Create a submit button (_Update_ in the image above) to get all the data from the form.
- Create an event handler function for managing the form submission. To prevent the default form behaviour (page reload), use the [`event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) method.
- Send the data to a function to save the new character through _[http://localhost:5000/characters/:id](http://localhost:5000/characters/:id)_
   <!-- :::danger -->
  **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
- If the character was successfully updated, set the background color of the button to green.
- If something went wrong, change the background color of the button to red.

That would be all!

Happy coding! :heart:
