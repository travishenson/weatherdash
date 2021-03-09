import styles from '../styles/components/MainWeather.module.css';

export default function MainWeather(props) {
  let parseDate = (dt) => {
    return (
      new Intl.DateTimeFormat(
        'en-US', {
          weekday: 'short', 
          day: 'numeric', 
          month: 'short', 
          timeZone: props.weatherData.weather.timezone
        })
        .format(
          new Date((dt * 1000) + props.weatherData.weather.timezone_offset)
        )
    )
  }

  return (
    <div className={styles.mainWeather}>
      <div className={styles.cityInfo}>
        {props.weatherData.city.state === '' ?
          <h2 className={styles.cityName}>{props.weatherData.city.name}, {props.weatherData.city.country}</h2>
          :
          <h2 className={styles.cityName}>{props.weatherData.city.name}, {props.weatherData.city.state}, {props.weatherData.city.country}</h2>
        }
        <h3 className={styles.date}>{parseDate(props.weatherData.weather.current.dt)}</h3>
      </div>
      <div className={styles.mainInfo}>
        <div className={styles.temperature}>
          <div className={styles.tempMeasure}>{Math.round(props.weatherData.weather.current.temp)}</div>
          <div className={styles.tempUnit}>°</div>
        </div>
        <div className={styles.condition}>{props.weatherData.weather.current.weather[0].main}</div>
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