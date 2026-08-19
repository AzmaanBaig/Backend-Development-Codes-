const express = require('express');
const fs = require('fs')
const app = express()
const port = 3000

app.patch('/updateData/:id', (req, res) => {
            const id = req.params.id
            const data = fs.readFileSync('data.json', 'utf8')
            const user = data.find((ele) => {
                if (ele.id == id) {
                    console.log(id)
                }
            })

            if (!user) { res.send('User not found') }


            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });

        }