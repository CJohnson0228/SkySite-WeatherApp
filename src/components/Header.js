import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Header(props) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  var today = new Date()
  var hours = today.getHours()
  var minutes = today.getMinutes()
  var ampm = (hours >= 12) ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes
  var curTime = hours + ':' + minutes + " " + ampm;
  var curDate = monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear()

  return (
    <Row className="mb-2">
      <Col className="my-auto">
        <Button variant="secondary" size="sm">Theme</Button>
      </Col>
      <Col xs={6} className="my-auto">
        <Row><h3 className="text-center">{props.location}</h3></Row>  
      </Col>
      <Col className="my-auto">
        <Row><p className="my-auto text-end" >{ curDate }  { curTime }</p></Row>
      </Col>
    </Row>
  );
};

export default Header
