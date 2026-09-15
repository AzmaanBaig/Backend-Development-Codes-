import express from 'express';
import data from './data.json'
with { type: 'json' };

const app = express();
const port = 3000;

app.get('/search', (req, res) => {
    const city = req.query.city;
    const temperature = data.cities[city];

    console.log(`City Name Is ${city} and Temperature Is ${temperature}`);

    res.send(`City Name Is ${city} and Temperature Is ${temperature}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});