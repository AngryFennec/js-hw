// Load packages and access services
const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer();

// Setup view engine to ejs
app.set('view engine', 'ejs');

// Serve static content directly
app.use(express.static("css"));
app.use(express.static("public"));

// Setup routes

// Route to welcome page
app.get('/', (request, response) => {
    response.render("index");
});

// Route to create page
app.get('/create', (request, response) => {
    const message = "get";
    const data = {
        name: "",
        email: "",
        payment: ""
    };
    response.render("create",
        {
            message: message,
            data: data
        });
});

// POST Route to form page
app.post('/create', upload.array(), (request, response) => {
    const message = "post";
    // Send form data back to the form
    const data = {
        name: request.body.name,
        email: request.body.email,
        payment: request.body.payment
    }
    //Call formPost passing message and name
    response.render("create",
        {
            message: message,
            data: data
        });
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});
