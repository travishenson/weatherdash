import { TailSpin } from 'svg-loaders-react';
import styles from '../styles/components/Loading.module.css';

export default function Loading() {
  return(
    <div className={styles.loading}>
      <div className={styles.inner}>
        <TailSpin className={styles.icon} />
      </div>
    </div>
  )
}