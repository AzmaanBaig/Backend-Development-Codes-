import express from "express";

const app = express();

app.get("/product/:id/:category", (req, res) => {
    console.log(req.method, req.url);

    const id = req.params.id;
    const category = req.params.category;

    res.send(`Product ID: ${id}, Category: ${category}`);
});

app.listen(3000, () => {
    console.log("Task 3 server running on port 3000");
});