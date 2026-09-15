const express = require('express');
const connectDB = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/sendData', async(req, res) => {
    const data = req.body;
    const Student = require('./Schema/studentSchema');
    const student = new Student(data)
    student.save()
});

app.get('/student', async(req, res) => {
    const Student = require("./Schema/studentSchema");
    const students = await Student.find();
    res.send(students);
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${PORT}`);
});