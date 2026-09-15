import express from "express";

const app = express();

// Home
app.get("/", (req, res) => {
    console.log(req.method, req.url);
    res.send("Welcome to Home Page");
});

// About
app.get("/about", (req, res) => {
    console.log(req.method, req.url);
    res.send("This is About Page");
});

// Contact
app.get("/contact", (req, res) => {
    console.log(req.method, req.url);
    res.send("This is Contact Page");
});

// User
app.get("/user/:name", (req, res) => {
    console.log(req.method, req.url);
    res.send(`Hello ${req.params.name}`);
});

// Product
app.get("/product/:id/:category", (req, res) => {
    console.log(req.method, req.url);

    res.send(
        `Product ID: ${req.params.id}, Category: ${req.params.category}`
    );
});

// Search
app.get("/search", (req, res) => {
    console.log(req.method, req.url);

    res.send(
        `Name: ${req.query.name}, Role: ${req.query.role}`
    );
});

app.listen(3000, () => {
    console.log("Task 5 server running on port 3000");
});