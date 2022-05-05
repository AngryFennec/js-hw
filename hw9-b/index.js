// Load the Express package as a module
const express = require("express");

const multer = require('multer');

// Access the main Express object
const app = express();

// Serve content of the "public" and "css" subfolder directly
app.use(express.static("public"));
app.use(express.static("css"));

const upload = multer();

const articles = []; // for ex3

// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

// Return a string for requests to the root URL ("/ex3")
app.get("/ex3", (request, response) => {
  response.sendFile(`${__dirname}/views/ex3.html`);
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
