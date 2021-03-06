import styles from '../styles/components/MainWeather.module.css';

export default function MainWeather(props) {
  let parseDate = (dt) => {
    return (
      new Intl.DateTimeFormat(
        'en-US', 
        {
          weekday: 'short', 
          day: 'numeric', 
          month: 'short', 
          timeZone: props.weatherData.weather.timezone
        })
        .format(
          new Date((dt + props.weatherData.weather.timezone_offset) * 1000)
        )
    )
  }

  return (
    <div className={styles.mainWeather}>
      <div className={styles.cityInfo}>
        <img 
          src={`http://openweathermap.org/img/wn/${props.weatherData.weather.current.weather[0].icon}@2x.png`}
          alt={`${props.weatherData.weather.current.weather[0].main} weather icon`}
          className={styles.weatherIcon}
        />
        {props.weatherData.city.state === '' ?
          <h2 className={styles.cityName}>{props.weatherData.city.name}, {props.weatherData.city.country}</h2>
          :
          <h2 className={styles.cityName}>{props.weatherData.city.name}, {props.weatherData.city.state}, {props.weatherData.city.country}</h2>
        }
        <h3 className={styles.date}>{parseDate(props.weatherData.weather.current.dt)}</h3>
      </div>
      <div className={styles.temperature}>
        <div className={styles.tempMeasure}>{Math.round(props.weatherData.weather.current.temp)}</div>
        <div className={styles.tempUnit}>°F</div>
      </div>
      <h3 className={styles.feelsLike}>Feels like {Math.round(props.weatherData.weather.current.feels_like)}°</h3>
      <div className={styles.hiLo}>
        <div>H: {Math.round(props.weatherData.weather.daily[0].temp.max)}°</div>
        <div>&nbsp; / &nbsp;</div>
        <div>L: {Math.round(props.weatherData.weather.daily[0].temp.min)}°</div>
      </div>
    </div>
  )
}