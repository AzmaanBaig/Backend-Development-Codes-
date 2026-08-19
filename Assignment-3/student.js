const http = require("http");

http.createServer((req, res) => {

    if (req.url === "/student") {

        const student = {
            id: 101,
            name: "John",
            course: "BCA",
            semester: 4,
            city: "Mumbai"
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(student));

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }

}).listen(3000);

console.log("Server running on port 3000");