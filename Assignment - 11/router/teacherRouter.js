const express = require("express");
const bcrypt = require("bcrypt");
const Teacher = require("../model/teacherModel");

const router = express.Router();

router.post("/teacher/register", async(req, res) => {
    try {
        const { name, email, password, subject } = req.body;

        if (!name || !email || !password || !subject) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const teacher = await Teacher.create({
            name,
            email,
            password: hashedPassword,
            subject
        });

        res.status(201).json({
            message: "Teacher registered successfully",
            teacher: {
                id: teacher._id,
                name: teacher.name,
                email: teacher.email,
                subject: teacher.subject
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Error registering teacher",
            error: error.message
        });
    }
});

module.exports = router;