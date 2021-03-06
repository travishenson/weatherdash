import styles from '../styles/components/WeatherInfo.module.css';

export default function WeatherInfo(props) {
  return (
    <div className={styles.weatherInfo}>
      <div className={styles.miscInfo}>
        <div>{props.weatherData.weather.current.clouds}% Clouds</div>
        <div>{props.weatherData.weather.current.humidity}% Humidity</div>
        <div>{props.weatherData.weather.current.wind_speed} MPH</div>
      </div>
    </div>
  )
}