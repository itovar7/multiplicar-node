const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Listado generado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.green(archivo) }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}
// let base = '7'; // esta validado que sea número

// console.log(process);
// console.log(process.argv);
// let base = process.argv[2].split('=')[1];
// console.log(base);
// let argv2 = process.argv;
// console.log(argv.base);
// console.log('limite', argv.limite);