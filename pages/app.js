import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/pages/App.module.css';

import SearchBar from '../components/SearchBar';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [weatherData, setWeatherData] = useState({ city: {}, weather: {} });

  let handleChange = event => {
    let searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  let handleKeyUp = event => {
    let key = event.keyCode;
    if (key === 13 && searchTerm !== '') { 
      setLocationQuery(searchTerm)
      fetchData(searchTerm)
    }
  }

  let fetchData = async () => {
    const data = await axios.get('/api/weather', {
      params: {
        location: searchTerm
      }
    });

    setWeatherData(data.data);
  }
  
  if (weatherData.city.name) {
    return(
      <div>
        <SearchBar searchTerm={searchTerm} handleChange={handleChange} handleKeyUp={handleKeyUp} />
        {weatherData.city.state === '' ?
          <h1>Showing weather for {weatherData.city.name}, {weatherData.city.country}</h1>
          :
          <h1>Showing weather for {weatherData.city.name}, {weatherData.city.state}, {weatherData.city.country}</h1>
        }
        <p>Location: {weatherData.city.name}</p>
        <p>Current temperature: {Math.round(weatherData.weather.current.temp)}° F</p>
      </div>
    )
  } else {
    return (
      <div>
        <SearchBar searchTerm={searchTerm} handleChange={handleChange} handleKeyUp={handleKeyUp} />
        <h1>Complete a search to see weather</h1>
      </div>
    )
  }
}