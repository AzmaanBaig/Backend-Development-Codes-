//consider you are working in amazon,once day your manager asked you to build a feature that can actually see te activity of the whole day , that at whole api endpoint req has been made along with timestam of the req, then how you are going to impliment it


const express = require("express");

const app = express();

let activity = [];

function logActivity(req, res, next) {
    activity.push({
        api: req.method + " " + req.url,
        time: new Date()
    });

    next();
}

app.use(logActivity);

app.get("/users", (req, res) => {
    res.send("Users API");
});

app.get("/products", (req, res) => {
    res.send("Products API");
});

app.get("/activity", (req, res) => {
    res.json(activity);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});