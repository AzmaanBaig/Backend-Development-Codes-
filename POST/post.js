const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/sendData', (req, res) => {
    const data = fs.readFileSync('data.json', 'UTF-8');
    // console.log(data);
    // res.send(data);
    data.push(req.body);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});