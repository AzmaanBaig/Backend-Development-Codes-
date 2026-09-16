const express = require("express");
const db = require("../config/firebase");
const userSchema = require("../schema/userSchema");

const router = express.Router();

// POST - Create User
router.post("/api/users", async(req, res) => {
    try {
        const { error, value } = userSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                message: "Validation failed",
                error: error.details[0].message
            });
        }

        const userRef = await db.collection("users").add(value);

        res.status(201).json({
            message: "User stored successfully",
            id: userRef.id,
            user: value
        });

    } catch (error) {
        res.status(500).json({
            message: "Error storing user",
            error: error.message
        });
    }
});

module.exports = router;