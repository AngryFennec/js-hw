// Load the Express package as a module
const express = require("express");

const multer = require('multer');

// Load the body-parser package as a module
const bodyParser = require("body-parser");

// Access the main Express object
const app = express();

// Serve content of the "public" and "css" subfolder directly
app.use(express.static("public"));
app.use(express.static("css"));

const upload = multer();

// Access the JSON parsing service
const jsonParser = bodyParser.json();

const articles = []; // for ex3

// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

// Return a string for requests to the url of ex1 ("/ex1")
app.get("/ex1", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
});

// Return a string for requests to the url of ex2 ("/ex2")
app.get("/ex2", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
});

// Return a string for requests to the url of ex3 ("/ex3")
app.get("/ex3", (request, response) => {
  response.sendFile(`${__dirname}/views/ex3.html`);
});

// Handle submission
app.post("/ex1", upload.array(), (request, response) => {
  response.send(`${request.body.name}, Thank you for your order. We wiil keep you posted on delivery status at ${request.body.email}`);
});

// Handle submission
app.post("/api/countries", jsonParser, (request, response) => {
  response.send(`Your name is ${request.body.name} and you visited ${request.body.countries.length} countries. Keep travelling!`);
});

// Handle submission
app.post("/ex3", upload.array(), (request, response) => {
  const articleTitle = request.body.title;
  const articleContent = request.body.content;
  const ids = articles.map(item => item.id); // из каждого элемента массива берет id и складывает в новый массив
  let max;
  if (!ids || ids.length === 0) {
    max = 0;
  } else {
    max = Math.max(...ids); //деструктуризация [1, 2, 3,] -> 1, 2, 3
  }
  const articleId = max + 1;
  articles.push({
    title: articleTitle,
    content: articleContent,
    id: articleId,
  });
  response.send(`New article added successfully with title ${articleTitle} and ID ${articleId}`);
});

// Start listening to incoming requests
// If process.env.PORT is not defined, 3000 is used
// нужно всегда для запуска сервера
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
