// const os = requrie('os').
// console.log(os.freemen())
// console.log(os.homedir())
// console.log(os.machine())





const fs = require('os')

// const fs = require('fs'): // --> Asynchronous Data

//     fs.readFile('info.txt', 'utf-8', (error, data) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(data);
//         }
//     });



// let data = fs.readFileSync('info.txt', 'utf-8'); // --> Synchronous Data
// console.log(data);


const data = 'this is some sample data sync';
exports.data = data;

// fs.writeFile('info.txt', data, (err) => {             // ---->   Asynchronous Data. WriteFile
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Data written successfully');
//     }
// });



// fs.writeFileSync('info.txt', data);                    // --> Synchronous Data WriteFile




fs.appendFile('info.txt', data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data appended successfully');
    }
});