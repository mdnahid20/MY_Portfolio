import React from "react";
import Navbers from "./Navbers";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

const Skills = () => {
  return (
    <>
    <Navbers/>
    <div className="skills"> 
       
    <Card style={{ width: '20rem' ,height: '7rem'}}>
      <Card.Header as="h5">Database</Card.Header>
      <Card.Body>
         <Container>
      <Row>
        <Col xs={6} md={6}>
        <Button variant="secondary">SQL</Button>
        </Col>
        <Col xs={6} md={6}>
        <Button variant="secondary">MS SQL</Button>
        </Col>
      </Row>
    </Container>
      </Card.Body>
    </Card>

    <br/>
    <Card style={{ width: '20rem' ,height: '7rem'}}>
      <Card.Header as="h5">Programming</Card.Header>
      <Card.Body>
         <Container>
      <Row>
        <Col xs={6} md={4}>
        <Button variant="secondary">C++</Button>
        </Col>
        <Col xs={6} md={4}>
        <Button variant="secondary">Java</Button>
        </Col>
        <Col xs={6} md={4}>
        <Button variant="secondary">Python</Button>
        </Col>
      </Row>
    </Container>
      </Card.Body>
    </Card>
    
    <br/>
    <Card style={{ width: '24rem' ,height: '7rem'}}>
      <Card.Header as="h5">Web Language</Card.Header>
      <Card.Body>
         <Container>
      <Row>
        <Col xs={6} md={4}>
        <Button variant="secondary">HTML</Button>
        </Col>
        <Col xs={6} md={4}>
        <Button variant="secondary">CSS</Button>
        </Col>
        <Col xs={6} md={4}>
        <Button variant="secondary">JAVASCRIPT</Button>
        </Col>
      </Row>
    </Container>
      </Card.Body>
    </Card>
   
    <br/>
    <Card style={{ width: '24rem' ,height: '7rem'}}>
      <Card.Header as="h5">Web Framework</Card.Header>
      <Card.Body>
         <Container>
      <Row>
        <Col xs={6} md={4}>
        <Button variant="secondary">React</Button>
        </Col>
        <Col xs={6} md={4}>
        <Button variant="secondary">Django</Button>
        </Col>
      </Row>
    </Container>
      </Card.Body>
    </Card>

    <br/>
    <ListGroup>
      <ListGroup.Item disabled>Extra</ListGroup.Item>
      <ListGroup.Item>IDE: Visual Studio, Code Blocks, Sublime Text.</ListGroup.Item>
      <ListGroup.Item>API: Rest API using Django.</ListGroup.Item>
      <ListGroup.Item>OOP in C++</ListGroup.Item>
      <ListGroup.Item>Version CONTROLLING: Git</ListGroup.Item>
    </ListGroup>
    
    <br/>
    <Card style={{ width: '24rem' ,height: '7rem'}}>
      <Card.Header as="h5">To Check Visit</Card.Header>
      <Card.Body>
         <Container>
      <Row>
        <Col xs={6} md={6}>
        <Button variant="dark" href="https://www.w3profile.com/MDNahidCHY">W3School</Button>
        </Col>
        <Col xs={6} md={6}>
        <Button variant="dark" href="https://www.freecodecamp.org/MdNahidChowdhury">FreeCodeCamp</Button>
        </Col>
      </Row>
    </Container>
      </Card.Body>
    </Card>
    </div>
    </>
  );
};

export default Skills;
