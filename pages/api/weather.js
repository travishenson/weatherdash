import axios from 'axios';

export default async (req, res) => {
  let weatherData;

  await axios({
    method: 'post',
    url: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.location}&units=imperial&appid=${process.env.OPENWEATHER_KEY}`
  })
  .then(response => weatherData = response.data)

  await res.json({
    weather: weatherData
  })
}