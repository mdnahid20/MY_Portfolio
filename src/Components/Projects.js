import React from "react";
import Navbers from "./Navbers";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Projects = () => {
  return (
    <>
    <Navbers/>
    
     <div className="codeforces">
          <Card
          bg={'Primary'}
          text={'white'}
          style={{ width: '18rem',height: '23rem' ,backgroundColor:'gray'}}
          className="mb-2">
          
          <Card.Header>Web-Project</Card.Header>
          <Card.Body>
            <Card.Title> Nc Travels</Card.Title>
            <Card.Text>
            A web-based project where users can book seats on the bus.                
            </Card.Text><Card.Text>
            The technology used: {<br/>} 
             Python, Bootstrap, Mysql, PHP
            </Card.Text>
            {<br/>} {<br/>} {<br/>} {<br/>} 
            <Button variant="light" href="https://github.com/mdnahid20/Nc_Travels">Github</Button>
          </Card.Body>
        </Card>
        </div>

        <div className="codechef">
         <Card
          bg={'Primary'}
          text={'white'}
          style={{ width: '18rem',height: '23rem' ,backgroundColor:'gray'}}
          className="mb-2"
        >
          <Card.Header>Web-Project</Card.Header>
          <Card.Body>
            <Card.Title> My Portfolio </Card.Title>
            <Card.Text>
            A web-based project contains a compilation of academic and professional materials that exemplify my beliefs, skills, qualifications, education, training, and experiences.
             </Card.Text><Card.Text>
            The technology used: {<br/>} 
             React,React-Bootstrap ,Js,Jsx,Css
            </Card.Text>
            <Button variant="light" href="https://github.com/mdnahid20/My_Portfolio">Github</Button>
          </Card.Body>
        </Card>
        </div>
    </>
  );
};

export default Projects;
