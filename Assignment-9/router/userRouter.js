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

// PATCH - Update User
router.patch("/api/users/:id", async(req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndUpdate(
            id,
            req.body, {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User updated successfully"
        });

    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid user ID"
            });
        }

        res.status(500).json({
            message: "Error updating user",
            error: error.message
        });
    }
});

// DELETE - Delete User
router.delete("/api/users/:id", async(req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User deleted successfully"
        });

    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid user ID"
            });
        }

        res.status(500).json({
            message: "Error deleting user",
            error: error.message
        });
    }
});

module.exports = router;