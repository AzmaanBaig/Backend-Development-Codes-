const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/home' && req.method === 'GET') {
        setTimeout(() => {
            res.end('this is a home page')
        }, 2000)
    } else if (req.url === '/contact' && req.method === 'POST') {
        res.end()
    }

    //     setTimeout(() => {
    //         res.end('this is a contact page')
    //     }, 2000)
    // } else if (req.url === '/blog' && req.method === '') {
    //     setTimeout(() => {
    //         res.end('this is a blog page')
    //     }, 2000)
    // } else {
    //     res.statusCode = 404
    //     res.end('Page not found')
    // }


});

server.listen(3000, () => {
    console.log('server is listening on port 3000')
})