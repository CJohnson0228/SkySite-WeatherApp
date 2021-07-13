import React, { useEffect, useState } from 'react';
import {usePosition} from './hooks/usePosition';
import axios from 'axios';

import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import ForecastFiveDay from './components/ForecastFiveDay';

function App() {
  const [ curWeather, setCurWeather ] = useState(null);
  const [ curForecast, setCurForecast ] = useState(null);
  const { latitude, longitude, error } = usePosition();
  
  if (error) {
    console.log(error);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setCurWeather(response);
        console.log(response);
      });
      
      await axios.get(`${process.env.REACT_APP_API_URL}/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=6&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setCurForecast(response);
        console.log(response);
      });
    };
    fetchData();
  }, [latitude,longitude]);

  if (curWeather && curForecast) {
    return (
      <Container style={{ maxWidth: "100vw", width: "100vw" }}>
        <Container className="mx-auto" style={{ height: "100vh" }}>
          <Header location={curWeather.data.name}/>
          <CurrentWeather data={curWeather.data}/>
          <ForecastFiveDay data={curForecast.data}/>
        </Container>
      </Container>
    );  
  } else {
    return (
      <div>
        Loading
      </div>
    );
  };
};

export default App;
