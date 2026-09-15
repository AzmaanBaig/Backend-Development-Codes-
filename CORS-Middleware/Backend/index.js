const express = require('express')
const PORT = 3000;
const app = express;
app.listen(PORT);

app.use(cors());

app.get("/api/data", (req, res) => {
    const data = fs.readFileSync("data.json", "utf-8");
    res.json(JSON.parse(data));
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:3000");
});