const express = require('express');

const router = express.Router();

const Student = require('../Schema/studentSchema');


router.post('/', async(req, res) => {
    try {
        const student = new Student(req.body);

        await student.save();

        res.status(201).json({
            message: 'Student created successfully',
            data: student
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});



router.get('/', async(req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json({
            data: students
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});



router.get('/:id', async(req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        res.json(student);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});



router.put('/:id', async(req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        res.json({
            message: 'Student updated successfully',
            data: student
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});



router.delete('/:id', async(req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        res.json({
            message: 'Student deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


module.exports = router;