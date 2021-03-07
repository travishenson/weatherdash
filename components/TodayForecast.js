import styles from '../styles/components/TodayForecast.module.css';

import ForecastPanel from './ForecastPanel';

export default function TodayForecast(props) {
  let parseTime = (dt) => {
    return (
      new Intl.DateTimeFormat(
        'en-US', {
          hour: 'numeric',
          timeZone: props.timezone
        })
        .format(
          new Date((dt + props.timezoneOffset) * 1000)
        )
    )
  }

  return (
    <div className={styles.today}>
      {(props.forecast).slice(24).map((hour) => {
        return(
          <ForecastPanel 
            temp={Math.round(hour.temp)}
            icon={hour.weather[0].icon}
            time={parseTime(hour.dt)}
            type={'hourly'}
          />
        )
      })}
    </div>
  )
}