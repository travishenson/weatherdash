import { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import styles from '../styles/components/SearchBar.module.css';

export default function SearchBar (props) {
  return (
    <div className={styles.topBar}>
      <div className={styles.inner}>
        <a href='/' alt='WeatherDash home'>
          <h3 className={styles.appName}>WeatherDash.</h3>
        </a>
        <input 
          type='text'
          placeholder='Search for a location'
          className={styles.searchBar}
          id='weather-search'
          value={props.searchTerm}
          onChange={props.handleChange}
          onKeyUp={props.handleKeyUp}
        />
        <div className={styles.unitsLabel}>
          <p>
            {props.units === 'imperial' ? 
              <span>
                <span onClick={props.setImperial} className={`${styles.activeUnit} ${styles.changeUnit}`}>°F</span>
                &nbsp; | &nbsp;
                <span onClick={props.setMetric} className={styles.changeUnit}>°C</span>
              </span>
              :
              <span>
                <span onClick={props.setImperial} className={styles.changeUnit}>°F</span>
                &nbsp; | &nbsp;
                <span onClick={props.setMetric} className={`${styles.activeUnit} ${styles.changeUnit}`}>°C</span>
              </span>
            }
          </p>
        </div>
      </div>
    </div>
  );
};