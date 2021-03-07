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
      </div>
    </div>
  );
};