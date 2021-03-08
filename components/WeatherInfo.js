import styles from '../styles/components/WeatherInfo.module.css';

export default function WeatherInfo(props) {
  return (
    <div className={styles.weatherInfo}>
      <div className={styles.miscInfo}>
        <div className={styles.clouds}>
          <div className={styles.cloudsValue}>
            {props.weatherData.weather.current.clouds}%
          </div>
          <div className={styles.cloudsLabel}>Clouds</div>
        </div>
        <div className={styles.humidity}>
          <div className={styles.humidityValue}>
            {props.weatherData.weather.current.humidity}%
          </div>
          <div className={styles.humidityLabel}>Humidity</div>
        </div>
        <div className={styles.wind}>
          <div className={styles.windValue}>
            {props.weatherData.weather.current.wind_speed} {props.units === 'imperial' ? 'mph' : 'kph'}
          </div>
          <div className={styles.windLabel}>Wind</div>
        </div>
      </div>
    </div>
  )
}