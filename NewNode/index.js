// import x from './second.js'.          - ESM Module

// import add from "./second.js";

// import { sub } from './second.js';

// import { mul } from './second.js';


const { add, sub, mul } = require('./second.js')

add(8, 6);
sub(8, 6);
mul(8, 6);