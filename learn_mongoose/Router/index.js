const express = require('express');
const app = express();
const PORT = 3000;

const router = express.Router();

const studentRouter = require('./StudentRouter');
const teacherRouter = require('./TeacherRouter');
const adminRouter = require('./AdminRouter');

router.use('/student', studentRouter);
router.use('/teacher', teacherRouter);
router.use('/admin', adminRouter);

module.exports = router;