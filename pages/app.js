import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/pages/App.module.css';

import SearchBar from '../components/SearchBar';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [weatherData, setWeatherData] = useState({});

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
    setWeatherData(data.data.weather);
  }
  
  if (weatherData.name) {
    return(
      <div>
        <SearchBar searchTerm={searchTerm} handleChange={handleChange} handleKeyUp={handleKeyUp} />
        <h1>Showing weather for {weatherData.name}, {weatherData.sys.country}</h1>
        <p>Location: {weatherData.name}</p>
        <p>Current temperature: {Math.round(weatherData.main.temp)}° F</p>
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