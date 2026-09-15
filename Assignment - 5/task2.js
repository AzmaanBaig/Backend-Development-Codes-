import express from "express";

const app = express();

app.get("/user/:name", (req, res) => {
    console.log(req.method, req.url);

    const name = req.params.name;

    res.send(`Hello ${name}`);
});

app.listen(3000, () => {
    console.log("Task 2 server running on port 3000");
});