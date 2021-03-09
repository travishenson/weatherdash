import { useState } from 'react';
import styles from '../styles/components/TodayForecast.module.css';

import ForecastPanel from './ForecastPanel';

export default function TodayForecast(props) {
  const [view, setView] = useState('collapsed');

  let parseTime = (dt) => {
    return (
      new Intl.DateTimeFormat(
        'en-US', {
          hour: 'numeric',
          timeZone: props.timezone
        })
        .format(
          new Date(dt * 1000)
        )
    )
  }

  let changeView = () => {
    if (view === 'collapsed') {
      setView('expanded')
    } else {
      setView('collapsed')
    }
  }

  return (
    <div>
      <button className={styles.expandToggle} onClick={changeView}>
        {view === 'collapsed' ? 'Expand' : 'Collapse' }
      </button>
      <div className={styles.today}>
        <div className={
          view === 'collapsed' ? 
          `${styles.todayInner} ${styles.collapsed}` 
          : 
          `${styles.todayInner} ${styles.expanded}` 
        }>
          {(props.forecast).slice(24).map((hour, index) => {
            return(
              <ForecastPanel 
                temp={Math.round(hour.temp)}
                icon={hour.weather[0].icon}
                time={index === 0 ? 'Now' : parseTime(hour.dt)}
                type={'hourly'}
                key={hour.dt}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}