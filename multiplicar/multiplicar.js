const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================='.green)
    console.log(`Tabla de ${base}`.green)
    console.log('======================='.green)

    for (let i = 0; i <= limite; i++) {

        console.log(`${ base } * ${i} = ${base * i}`);

    }


}


let at = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject('no es un número');
            return;

        }

        let data = '';

        for (let i = 0; i <= limite; i++) {

            data += `${ base } * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`${base}-al-${limite}.txt`)

            console.log('El archivo ha sido creado');
        });

    })

}

module.exports = {

    at,
    listarTabla

}