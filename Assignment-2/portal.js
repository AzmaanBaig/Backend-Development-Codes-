// portal.js

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
    <html>
    <head>
        <title>Student Portal</title>
    </head>

    <body>

        <hr>

        <h1>Student Portal</h1>

        <hr>

        <h3>Name: John Doe</h3>
        <h3>Course: Full Stack Development</h3>
        <h3>College: XYZ College</h3>

        <p>Welcome to our Node.js application.</p>
    </body>
    </html>
`);
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});