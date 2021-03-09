import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

import { Forecast, Loading, MainWeather, SearchBar, WeatherInfo } from '../components';
import styles from '../styles/pages/App.module.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [weatherData, setWeatherData] = useState({ city: {}, weather: {} });
  const [units, setUnits] = useState('imperial');
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    const data = await axios.get('/api/weather', {
      params: {
        location: searchTerm,
        units: units
      }
    });

    setWeatherData(data.data);
    setLoading(false);
  }

  let setImperial = async () => {
    setUnits('imperial');
    window.localStorage.setItem('units', 'imperial');
  }

  let setMetric = () => {
    setUnits('metric');
    window.localStorage.setItem('units', 'metric');
  }

  useEffect(() => {
    if (searchTerm !== '') { fetchData() };
  }, [units])

  useEffect(() => {
    setUnits(window.localStorage.getItem('units'))
  }, [])
  
  if (loading === true) {
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
        <Loading />
      </div>
    )
  } else if (weatherData.city.name) {
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