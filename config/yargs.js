const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

};


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea un archivo nuevo txt con la tabla de multiplicar y un límite establecido', opt)
    .help()
    .argv;

module.exports = {
    argv
}