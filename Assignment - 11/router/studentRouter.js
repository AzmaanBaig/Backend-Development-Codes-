const express = require("express");
const bcrypt = require("bcrypt");
const Student = require("../model/studentModel");

const router = express.Router();

router.post("/student/register", async(req, res) => {
    try {
        const { name, email, password, course, age } = req.body;

        if (!name || !email || !password || !course || !age) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const student = await Student.create({
            name,
            email,
            password: hashedPassword,
            course,
            age
        });

        res.status(201).json({
            message: "Student registered successfully",
            student: {
                id: student._id,
                name: student.name,
                email: student.email,
                course: student.course,
                age: student.age
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Error registering student",
            error: error.message
        });
    }
});

module.exports = router;