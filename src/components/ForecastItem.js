import React from 'react';
import Card from 'react-bootstrap/Card';
import celsiusToFahrenheit from '../hooks/celsiusToFahrenheit';

function ForecastItem(props) {
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  
  const dateConvert = (uDate) => {
    var date = new Date(uDate * 1000);
    var month = months[date.getMonth()];
    var day = date.getDate();
    var Fdate = month + " " + day;
    return (Fdate);
  }

  var thisDate = dateConvert(props.data.dt);
  var tempHiC = props.data.temp.max;
  var tempHiF = celsiusToFahrenheit(tempHiC);
  var tempLowC = props.data.temp.min;
  var tempLowF = celsiusToFahrenheit(tempLowC);
  var weatherDesc = props.data.weather[0].main;
  var weatherIcon = `${process.env.REACT_APP_ICON_URL}/${props.data.weather[0].icon}.png`;
  
  
  

  return (
    <Card 
      style={{
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: "20px"
      }}
      className="text-center py-3 px-1 border-0">
        <Card.Body>
          <Card.Title>{thisDate}</Card.Title>
          <Card.Img variant="top" src={weatherIcon} style={{ width: "70px"}}/>
          <Card.Subtitle>{weatherDesc}</Card.Subtitle>
          <p> </p>
          <Card.Text className="mb-0"><u>High Temp:</u></Card.Text>
          <Card.Text>{tempHiF}&#176;F&#xa0;/&#xa0;{tempHiC}&#176;C </Card.Text>
          <Card.Text className="mb-0"><u>Low Temp:</u></Card.Text>
          <Card.Text>{tempLowF}&#176;F&#xa0;/&#xa0;{tempLowC}&#176;C </Card.Text>
          <Card.Text className="mb-0"><u>Humidity:</u></Card.Text>
          <Card.Text>{props.data.humidity}%</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ForecastItem
