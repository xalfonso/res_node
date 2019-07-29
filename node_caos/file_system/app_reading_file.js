const fs = require('fs')

/**
 * Example of reading file Asynchronous
 */
console.log('Init Reading File Asynchronous');
fs.readFile('data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log('Some errors happen reading file');
    } else {
        console.log("Tha data file is: ");
        console.log(data);
    }
});
console.log('End Reading File Asynchronous');

/**
 * Example of reading file Synchronous
 */
console.log('Init Reading File Synchronous');
let data = fs.readFileSync('data.txt', 'utf-8');

console.log('End Reading File Synchronous. Data: ' + data);



