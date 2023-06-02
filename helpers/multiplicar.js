
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

// al agregar async a la funcion ya estamos diciendo que es una promesa
const crearArchivo = async(base = 5, listar = false,hasta = 10) => {

    try {
            
        let salida = '';
        let consola = '';
        
        for(let i = 1; i <= hasta; i++){
            salida += `${base}  x ${i} = ${base*i}\n`
            consola += `${base}  ${'x'.green} ${i} ${'='.green} ${base*i}\n`
        }

        if (listar){
            console.log(`--------------------------`.green);
            //console.log(`       Tabla del  ${base}  `);      
            console.log(`       Tabla del`.green,  colors.blue(base));      
            console.log(`--------------------------`.green);
            
            console.log(salida);
        }
        
        
       
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
    
        console.log(`Se ha creado el fichero tabla-${ base }.txt`);

        return `tabla-${ base }.txt`
        
    } catch (error) {
        throw error;
        
    }
     
}

module.exports = {
    crearArchivo
}