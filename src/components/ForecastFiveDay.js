import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ForecastItem from './ForecastItem';


function ForecastFiveDay(props) {
  var weatherArray = props.data.list
  weatherArray = weatherArray.slice(1);
  const weatherKeys = Object.keys(weatherArray);

  return (
    <Row className="mt-5 pb-5">
       {weatherKeys.map((item, i) => (
         <Col>
          <ForecastItem key={i} data={weatherArray[i]} id={i}/>
         </Col> 
       ))}
    </Row>
  );
};

export default ForecastFiveDay;