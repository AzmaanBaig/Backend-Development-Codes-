const fs = require('fs')
const middleware = ((req, res, next) => {

    const timestamp = new Date().toLocaleString();

    const log = `${timestamp} | ${req.method} | ${req.url}\n`;

    fs.appendFile('activity.log', log, (err) => {

        if (err) {
            console.log("Error writing log:", err);
        }

    });

    next();
});
module.exports = middleware