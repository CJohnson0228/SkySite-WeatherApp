import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import timeConvert from '../hooks/timeConvert';
import celsiusToFahrenheit from '../hooks/celsiusToFahrenheit';
import windDirection from '../hooks/windDirection';
import metersToStatuteMiles from '../hooks/metersToStatuteMiles';
import millibarsToInHg from '../hooks/millibarsToInHg';
import { GiWindsock } from 'react-icons/gi';
import { FaSun } from 'react-icons/fa';
import { FiEye, FiThermometer } from 'react-icons/fi';
import { BsDropletHalf } from 'react-icons/bs';

function CurrentWeather(props) {

  var realFeelC = props.data.main.feels_like;
  var realFeelF = celsiusToFahrenheit(realFeelC);
  var tempC = props.data.main.temp;
  var tempF = celsiusToFahrenheit(tempC);
  var tempHiC = props.data.main.temp_max;
  var tempHiF = celsiusToFahrenheit(tempHiC);
  var tempLowC = props.data.main.temp_min;
  var tempLowF = celsiusToFahrenheit(tempLowC);
  var weatherDesc = props.data.weather[0].main;
  var weatherIcon = `${process.env.REACT_APP_ICON_URL}/${props.data.weather[0].icon}.png`;
  var sunRise = timeConvert(props.data.sys.sunrise);
  var sunSet = timeConvert(props.data.sys.sunset);
  var mWindSpeed = props.data.wind.speed;
  var eWindSpeed = ((props.data.wind.speed) * 2.24).toFixed(2);
  var windDir = windDirection(props.data.wind.deg);
  var mVisibility = props.data.visibility;
  var eVisibility = metersToStatuteMiles(props.data.visibility);
  var mPressure = props.data.main.pressure;
  var ePressure = millibarsToInHg(props.data.main.pressure);

  return (
    <div>
      <Jumbotron 
        className="
          d-flex 
          text-center 
          justify-content-center 
          align-items center" 
        style={{height: "50vh"}}>
          <Row className="my-auto">
            <Col 
              
              className="
                d-flex 
                justify-content-center 
                align-items-end" 
              xs={2}>
                <div 
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }}
                  className="
                    p-5 
                    rounded-circle">
                      <img src={weatherIcon} alt="" />
                </div>
            </Col>
            <Col 
              md="auto p-5" 
              className="
                d-flex
                justify-content-center
                align-items-center
                rounded-circle"
              style={{
                height: "400px",
                width: "400px",
                backgroundColor: "rgba(255,255,255,0.2)"
              }}>
                <div>
                  <p className="p-0 m-0">
                    Real Feel: {realFeelF}&#176;F /&#xa0;{realFeelC}&#176;C 
                  </p>
                  <h1 className="my-4">
                    {tempF}&#176;F&#xa0;/&#xa0;{tempC}&#176;C
                  </h1>
                  <p className="p-0 m-0">
                    Today's Low: {tempLowF}&#176;F&#xa0;/&#xa0;{tempLowC}&#176;C
                  </p>
                  <p className="p-0 m-0 mb-3">
                    Today's Hi: {tempHiF}&#176;F&#xa0;/&#xa0;{tempHiC}&#176;C
                  </p>
                  <h2>
                    {weatherDesc}
                  </h2>
                </div>
                
            </Col>
            <Col xs={2}></Col> 
          </Row>
      </Jumbotron>
      <Row 
        style={{
          backgroundColor: "rgba(255,255,255,0.2)"
        }}
        className="
          border-top 
          border-bottom 
          border-light 
          border-1 
          py-3">
            <Col className="text-center">
              <FaSun className="mb-2" style={{ fontSize: "1.5rem", color: "#ae2012"}}/>
              <div className="d-flex justify-content-around align-items-center mt-1">
                <div>
                  <p className="mb-0">Sunrise:</p> 
                  <p className="mb-0">Sunset:</p> 
                </div>
                <div>
                  <p className="mb-0">{ sunRise }</p> 
                  <p className="mb-0">{ sunSet }</p> 
                </div>
              </div>   
            </Col>
            <Col className="text-center">
              <GiWindsock className="mb-2" style={{ fontSize: "1.5rem"}} />
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <p className="mb-0 mt-1">Wind { windDir } at</p>
                  <p className="mb-0">{ eWindSpeed } mph</p>
                  <p className="mb-0">{ mWindSpeed } m/s</p>
                </div> 
              </div>
            </Col>
            <Col className="text-center">
              <FiEye className="mb-2" style={{ fontSize: "1.5rem"}} />
              <div className="d-flex justify-content-around align-items-center">
                <div>
                  <p className="mb-0 mt-1">Visibility</p>
                  <p className="mb-0">{eVisibility} miles</p>
                  {mVisibility > 999 
                    ? <p className="mb-0">{mVisibility / 1000} kms</p> 
                    : <p className="mb-0">{mVisibility} ms</p>
                  }
                </div>
              </div>
            </Col>
            <Col className="text-center">
              <BsDropletHalf className="mb-2" style={{ fontSize: "1.5rem"}} />
              <div className="d-flex justify-content-around align-items-center">
                <div>
                  <p className="mb-0 mt-1">Humidity</p>
                  <p className="mb-0">{props.data.main.humidity}%</p>
                </div>
              </div>  
            </Col>
            <Col className="text-center">
              <FiThermometer className="mb-2" style={{ fontSize: "1.5rem"}} />
              <div className="d-flex justify-content-around align-items-center">
                <div>
                  <p className="mb-0 mt-1">Pressure</p>
                  <p className="mb-0">{ePressure} inHg</p>
                  <p className="mb-0">{mPressure} mbar</p>
                </div>
              </div>  
            </Col>
      </Row>
    </div>
  )
}

export default CurrentWeather
