import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log(req.method, req.url);
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    console.log(req.method, req.url);
    res.send("This is About Page");
});

app.get("/contact", (req, res) => {
    console.log(req.method, req.url);
    res.send("This is Contact Page");
});

app.listen(3000, () => {
    console.log("Task 1 server running on port 3000");
});