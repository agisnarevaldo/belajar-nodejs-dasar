// const fs = require('fs'); // Core Module
// const cetakNama = require('./coba2'); // local module
// const moment = require('moment'); // third party module / npm module -> node_modules

const coba = require('./coba2');
// console.log(coba);  
console.log(coba.cetakNama('Agisna'));

console.log(coba.PI);

console.log(coba.person.showPerson(),
            new coba.Orang()
            );