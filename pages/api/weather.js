import axios from 'axios';
const cityList = require('./citylist.json');

export default async (req, res) => {
  let weatherData;
  let cityData;
  let lat;
  let lon;

  await axios({
    method: 'post',
    url: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.location}&units=imperial&appid=${process.env.OPENWEATHER_KEY}`
  })
  .then(response => {
    lat = response.data.coord.lat;
    lon = response.data.coord.lon;
    let cityInfo = cityList.filter(({id}) => id === response.data.id)[0];
    
    if (cityInfo.state === '') {
      cityData = {
        name: response.data.name,
        state: '',
        country: response.data.sys.country,
        id: response.data.id
      }
    } else {
      cityData = {
        name: cityInfo.name,
        state: cityInfo.state,
        country: cityInfo.country,
        id: cityInfo.id
      }
    }
  })

  await axios({
    method: 'post',
    url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.OPENWEATHER_KEY}`
  })
  .then(response => {
    weatherData = response.data
  })

  await res.json({
    city: cityData,
    weather: weatherData
  })
}