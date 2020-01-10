const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=73d7299314bf3d0eac0ddd9a8b47ae30&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}