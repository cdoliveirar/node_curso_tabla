const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

// otra forma de require sencillo
require('colors');


console.clear();

console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);  // captura el objeto en el command


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
