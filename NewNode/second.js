// export default function add(a, b) {.    - ESM Module
//     console.log(a + b);
// }

// export function mul(a, b) {
//     console.log(a * b);
// }

// export function sub(a, b) {
//     console.log(a - b);
// }



function add(a, b) {
    console.log(a + b);
}

function mul(a, b) {
    console.log(a * b);
}

function sub(a, b) {
    console.log(a - b);
}

module.exports = { add, sub, mul };