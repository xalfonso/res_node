const os = require('os');
const fs = require('fs');
const moduleA = require('./modulea.js');

console.log('Impresion de variable del module a:' + moduleA.someVariableModuleA);
console.log('Executing function of module a:' + moduleA.someFuctionModuleA(45, 50));

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

