import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

import { Forecast, MainWeather, SearchBar, WeatherInfo } from '../components';
import styles from '../styles/pages/App.module.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [weatherData, setWeatherData] = useState({ city: {}, weather: {} });
  const [units, setUnits] = useState('imperial');

  let handleChange = event => {
    let searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  let handleKeyUp = event => {
    let key = event.keyCode;
    if (key === 13 && searchTerm !== '') { 
      setLocationQuery(searchTerm);
      fetchData(searchTerm);
    }
  }

  let fetchData = async () => {
    const data = await axios.get('/api/weather', {
      params: {
        location: searchTerm,
        units: units
      }
    });

    setWeatherData(data.data);
  }

  let setImperial = async () => {
    if (searchTerm === '') {
      setUnits('imperial');
    } else {
      setUnits('imperial');
    };
  }

  let setMetric = () => {
    if (searchTerm === '') {
      setUnits('metric');
    } else {
      setUnits('metric');
    };
  }

  useEffect(() => {
    if (searchTerm !== '') { fetchData() };
  }, [units])
  
  if (weatherData.city.name) {
    return(
      <div>
        <SearchBar 
          searchTerm={searchTerm} 
          units={units}
          handleChange={handleChange} 
          handleKeyUp={handleKeyUp} 
          setImperial={setImperial}
          setMetric={setMetric}
        />
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <MainWeather weatherData={weatherData} units={units} />
            <WeatherInfo weatherData={weatherData} />
            <hr />
            <Forecast weatherData={weatherData} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <SearchBar 
          searchTerm={searchTerm} 
          units={units}
          handleChange={handleChange} 
          handleKeyUp={handleKeyUp} 
          setImperial={setImperial}
          setMetric={setMetric}
        />
      </div>
    )
  }
}