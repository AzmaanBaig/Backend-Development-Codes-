const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRouter = require("./router/userRouter");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

app.use(userRouter);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});