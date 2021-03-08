import styles from '../styles/components/ForecastPanel.module.css';

export default function ForecastPanel(props) {
  if (props.type === 'hourly') {
    return (
      <div className={styles.panel}>
        <div>{props.time}</div>
        <img className={styles.icon} src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
        <div>{props.temp}°</div>
      </div>
  )} else {
    return (
      <div className={styles.panel}>
        <div>{props.time}</div>
        <img className={styles.icon} src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
        <div>{props.hi}/{props.lo}</div>
      </div>
    )
  }
}