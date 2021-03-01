import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WeatherDash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to WeatherDash
        </h1>

        <p>
          A weather app focused on a simple and intuitive design
        </p>

        <a href='/app'>
          <button className={styles.button}>
            Get Started
          </button>
        </a>
      </main>

      <footer className={styles.footer}>
        WeatherDash designed and created by&nbsp;
        <a 
          href='https://github.com/travishenson' 
          target='_blank'
        >
          Travis Henson
        </a>
      </footer>
    </div>
  )
}
