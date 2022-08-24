import React from 'react'
import Card from 'react-bootstrap/Card';
import './card.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { FcRating } from "react-icons/fc";
import flag from '../../assets/2.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {ResultCard} from '../../data/result'

const Prediction = () => {
  return (
    <React.Fragment>
      <div className='predictorcard'>
      <Card >
    <Card.Header className = "cardHeader">Live Prediction</Card.Header>
    <Card.Header className = "cardHeader2">13:20 Yarmouth <br/> 1M 3Y (14 runners) <div> <FcRating className='cardIcon'/>  <img src= {flag} alt="img" className='imagediv'/> <MdOutlineKeyboardArrowRight className ='arrow'/> </div>
  </Card.Header>
  {
        ResultCard.map((item) => {
          return(
            <ListGroup variant="light" className ='cardMain' key={item.id}>
    <ListGroup.Item className = 'cardData'>{item.position} {item.length}<img src={item.image} className ='shirtimg' alt="img"/> <span>{item.jockey}</span> <br/>  <p className='Playername'>{item.player}</p></ListGroup.Item>
     </ListGroup>
          )
        })
      }
    
  </Card>
      </div>
    </React.Fragment>
  )
}

export default Prediction
