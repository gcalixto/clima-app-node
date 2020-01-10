const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para optener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);


// clima.getClima(35, 139)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const lugard = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(lugard.lat, lugard.lng);

        return `El clima de ${ direccion } es de ${ temp }`;


    } catch (error) {
        return `No se pudo determinar el clima de ${direccion} `;

    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);