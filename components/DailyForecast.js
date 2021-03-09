import styles from '../styles/components/DailyForecast.module.css';

import ForecastPanel from './ForecastPanel';

export default function DailyForecast(props) {
  let parseDay = (dt) => {
    return (
      new Intl.DateTimeFormat(
        'en-US', {
          weekday: 'short',
          timeZone: props.timezone
        })
        .format(
          new Date((dt + props.timezoneOffset) * 1000)
        )
    )
  }

  return (
    <div className={styles.daily}>
      {(props.forecast).map((day) => {
        return(
          <ForecastPanel 
            hi={Math.round(day.temp.max)}
            lo={Math.round(day.temp.min)}
            icon={day.weather[0].icon}
            time={parseDay(day.dt)}
            type={'daily'}
            key={day.dt}
          />
        )
      })}
    </div>
  )
}