const express = require('express');

const router = express.Router();

const Teacher = require('../Schema/teacherSchema');



router.post('/', async(req, res) => {
    try {
        const teacher = new Teacher(req.body);

        await teacher.save();

        res.status(201).json({
            message: 'Teacher created successfully',
            data: teacher
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});



router.get('/', async(req, res) => {
    try {
        const teachers = await Teacher.find();

        res.status(200).json({
            data: teachers
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});



router.get('/:id', async(req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);

        if (!teacher) {
            return res.status(404).json({
                message: 'Teacher not found'
            });
        }

        res.status(200).json(teacher);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});



router.put('/:id', async(req, res) => {
    try {
        const teacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true,
                runValidators: true
            }
        );

        if (!teacher) {
            return res.status(404).json({
                message: 'Teacher not found'
            });
        }

        res.status(200).json({
            message: 'Teacher updated successfully',
            data: teacher
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});



router.delete('/:id', async(req, res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id);

        if (!teacher) {
            return res.status(404).json({
                message: 'Teacher not found'
            });
        }

        res.status(200).json({
            message: 'Teacher deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


module.exports = router;