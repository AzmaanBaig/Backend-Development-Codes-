const express = require("express");
const User = require("../model/userModel");

const router = express.Router();

// POST - Create User
router.post("/api/users", async(req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            message: "User created successfully",
            user: user
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
});

// GET - Retrieve Users
router.get("/api/users", async(req, res) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving users",
            error: error.message
        });
    }
});

module.exports = router;