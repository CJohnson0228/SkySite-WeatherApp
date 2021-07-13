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

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  var today = new Date()
  var themeDate = parseInt((today.getTime() / 1000).toFixed(0))
  var hours = today.getHours()
  var minutes = today.getMinutes()
  var ampm = (hours >= 12) ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes
  var curTime = hours + ':' + minutes + " " + ampm;
  var curDate = monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear()
  
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
    
    /* ------- ThemeSetup ------- */
    var bgColor = "white"
    if (themeDate > curWeather.data.sys.sunrise && themeDate < curWeather.data.sys.sunset ) {
      bgColor = "linear-gradient(45deg, #ca6702, #e9d8a6)";
    } else {
      bgColor = "linear-gradient(45deg, #005f73, #0a9396)"
    }
    /* ------- ThemeSetup -------- */

    console.log(bgColor)
    return (
      <Container 
      className="text-light"
        style={{ 
          maxWidth: "100vw", 
          width: "100vw",
          background: bgColor }}>
        <Container className="mx-auto" style={{ minHeight: "100vh" }}>
          <Header location={curWeather.data.name} time={curTime} date={curDate}/>
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
