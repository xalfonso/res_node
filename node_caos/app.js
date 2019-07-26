const os = require('os');
const fs = require('fs')

let cpu = os.cpus();
let system = os.platform();
let pcName = os.hostname()

console.log(cpu);
console.log(system);
console.log(pcName);

fs.appendFile('node_caos', 'First example of node jx', error => {
    if (error) {
    console.log("Error al agregar el fichero")
    }
})