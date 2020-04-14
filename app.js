const argv = require('./config/yargs').argv;
const { at, listarTabla } = require('./multiplicar/multiplicar.js');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite)

        break;
    case 'crear':

        at(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(e => console.log(e))

        break;
    default:
        console.log('comando no reconocido')
        break;
}