const express = require('express')
const middleware = require('./md.js');
const app = express()
const PORT = 3000;

app.use(middleware);
app.use(express.json())
app.use(express.text)

app.get('/home', (req, res) => {
    res.send("this is home page");
    console.log("this is home page");
});

app.get('/contact', (req, res) => {
    res.send("this is contact page...");
    console.log("this is contact page...");
})

app.get('/blogs', (req, res) => {
    res.send("this is blogs page");
    console.log("this is blogs page");
})


app.listen(PORT, () => {
    console.log(`server is running on port $ { PORT }`);
});