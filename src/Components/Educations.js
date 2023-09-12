import React from "react";
import Navbers from "./Navbers";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const Education = () => {
  return (
    <>
    <Navbers/>
    <div className="versity">
    <Card style={{ width: '25rem' ,height: '25rem'}}>
      <Card.Img variant="top" src="/img/images.jpeg"/>
      <Card.Body>
        <Card.Title>Undergraduate</Card.Title>
        <Card.Text>
         International Islamic University Chittagong
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>April 2019 - June 2023</ListGroup.Item>
        <ListGroup.Item>BSc in Computer Science and Engineering</ListGroup.Item>
        <ListGroup.Item>CGPA: 3.652 out of 4.00</ListGroup.Item>
        <Button variant="secondary" href="https://www.iiuc.ac.bd/">Visit</Button>
        </ListGroup>
    </Card>
    
    </div>
    </>
  );
};

export default Education;
