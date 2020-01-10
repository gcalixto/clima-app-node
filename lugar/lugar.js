const axios = require('axios');


// console.log(argv.direccion);


const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);
    // console.log(encodeUrl);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'x-rapidapi-key': '423ae0c79bmsh7fae6c9293b2705p112410jsn9442b2e899b9' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }


    /*
    instance.get()
        .then(resp => {
            console.log(resp.data.Results);
        })
        .catch(err => {
            console.log('Errorrr!!!', err);
        });
        */


}


module.exports = {
    getLugarLatLng
}