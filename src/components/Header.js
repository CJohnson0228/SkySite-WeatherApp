import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Header(props) {
  

  return (
    <Row className="mb-2 p-3">
      <Col className="my-auto">
        <Button variant="secondary" size="sm">Theme</Button>
      </Col>
      <Col xs={6} className="my-auto">
        <Row><h3 className="text-center">{props.location}</h3></Row>  
      </Col>
      <Col className="my-auto">
        <Row><p className="my-auto text-end" >{ props.date }  { props.time }</p></Row>
      </Col>
    </Row>
  );
};

export default Header
