const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("./models/User");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());


// ==========================
// REGISTER
// ==========================

app.post("/register", async(req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required"
            });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        // Save user to MongoDB Atlas
        await user.save();

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});


// ==========================
// LOGIN
// ==========================

app.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;

        // Find user using email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Compare entered password with hashed password
        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Generate JWT token
        const token = jwt.sign({
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET, {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token: token
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});


// ==========================
// PRIVATE PROFILE
// ==========================

app.get("/profile", authMiddleware, (req, res) => {

    res.status(200).json({
        message: "Welcome to your private profile",
        user: {
            id: req.user.id,
            email: req.user.email
        }
    });

});


// ==========================
// MONGODB CONNECTION
// ==========================

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });