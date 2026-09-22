const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("./models/User");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

app.post("/register", async(req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: "User registered successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
});

app.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

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
        res.status(500).json({
            message: "Server error"
        });
    }
});

app.get("/profile", authMiddleware, (req, res) => {
    res.status(200).json({
        message: "Welcome to your private profile",
        user: {
            id: req.user.id,
            email: req.user.email
        }
    });
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });