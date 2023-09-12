import React from "react";
import Navbers from "./Navbers";
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Achievment = () => {
  return (
    <>
    <Navbers/>

    <div className="achievment">
   <h3> <Badge  bg="info" >Achievment</Badge></h3>
  
      <Alert variant='primary'>Rank 173rd at SELISE Coding Challenge 2022.<Button variant="outline-secondary" href="https://toph.co/arena?contest=selise-coding-challenge-2023#!/standings/p4">Visit </Button></Alert>
      <Alert variant='secondary'>Champion at IIUC Junior Intra University Programming  Contest 2021. <Button variant="outline-secondary" href = "https://toph.co/contests/training/7mtndee/standings">Visit </Button></Alert>
      <Alert variant='success'>Rank 14th at IIUC Intra University Programming Contest 2022 <Button variant="outline-secondary">Visit</Button></Alert>
      <Alert variant='danger'>Rank 18th a IIUC Intra University Programming Contest Autumn 2021  <Button variant="outline-secondary" href="https://toph.co/contests/training/d8lzmcj/standings">Visit</Button></Alert>
      
      </div>
    </>
  );
};

export default Achievment;
