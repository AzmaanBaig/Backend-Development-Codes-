import express from "express";

const app = express();

app.get("/search", (req, res) => {
    console.log(req.method, req.url);

    const name = req.query.name;
    const role = req.query.role;

    res.send(`Name: ${name}, Role: ${role}`);
});

app.listen(3000, () => {
    console.log("Task 4 server running on port 3000");
});