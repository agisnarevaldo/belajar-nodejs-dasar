// core module

// File system
const fs = require('fs');

// Menuliskan string ke file (synchronous)
fs.writeFileSync('test.txt', 'hello world secara synchronous!');