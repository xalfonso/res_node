const fs = require('fs')

fs.rename('data.txt', 'data_renombrado.txt', (error)=>{
    if(error) throw error;
    console.log('El fichero fue renombrado');
})