import React from 'react'
import Card from 'react-bootstrap/Card';
import './card.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { FcRating } from "react-icons/fc";
import flag from '../../assets/2.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Shirt1 from '../../assets/1 (1).png' 
import Shirt2 from '../../assets/3.png'  
import Shirt3 from '../../assets/4.png' 
const Prediction = () => {
  return (
    <React.Fragment>
      <div className='predictorcard'>
      <Card >
    <Card.Header className = "cardHeader">Result</Card.Header>
    <Card.Header className = "cardHeader2">13:20 Yarmouth <br/> 1M 3Y (14 runners) <div> <FcRating className='cardIcon'/>  <img src= {flag} alt="img" className='imagediv'/> <MdOutlineKeyboardArrowRight className ='arrow'/> </div>
  </Card.Header>
    <ListGroup variant="light" className ='cardMain' >
      <ListGroup.Item className = 'cardData'>1st   1M  <img src={Shirt1} alt="img" className ='shirtimg'/> <span>Dutugamunu (IRE) </span> <br/>  <p className='Playername'>J:Olsin Murphy</p></ListGroup.Item>
      <ListGroup.Item className = 'cardData'>2nd .75  <img src={Shirt2} alt="img" className ='shirtimg'/>  <span>Roca Magica  </span> <br/>  <p className='Playername'>J:R Kingscote</p></ListGroup.Item>
      <ListGroup.Item className = 'cardData'>3rd DH   <img src={Shirt3} alt="img" className ='shirtimg'/> <span>Urtzi (IRE) </span> <br/>  <p className='Playername'>J:E J Walsh</p></ListGroup.Item>
    </ListGroup>
  </Card>
      </div>
    </React.Fragment>
  )
}

export default Prediction
