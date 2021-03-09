import styles from '../styles/components/Forecast.module.css';

import TodayForecast from './TodayForecast';
import DailyForecast from './DailyForecast';

export default function Forecast(props) {
  return (
    <div className={styles.forecast}>
      <div className={styles.section}>
        <h3 className={styles.sectionHeader}>Today's Hourly Forecast</h3>
        <TodayForecast 
          forecast={props.weatherData.weather.hourly} 
          timezone={props.weatherData.weather.timezone} 
          timezoneOffset={props.weatherData.weather.timezone_offset} 
        />
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionHeader}>This Week's 7-Day Forecast</h3>
        <DailyForecast 
          forecast={props.weatherData.weather.daily.slice(1)} 
          timezone={props.weatherData.weather.timezone} 
          timezoneOffset={props.weatherData.weather.timezone_offset}
        />
      </div>
    </div>
  )
}