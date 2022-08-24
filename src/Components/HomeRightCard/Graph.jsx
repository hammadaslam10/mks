import React from 'react'
import './rightside.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Chart from './Chart';
const Graph = () => {
  return (
    <div className='graph'>
      <ListGroup as="ul">
      <ListGroup.Item as="li" active className='activeheader'>
        Live Prediction
      </ListGroup.Item>
     <>
     <Chart/>
     </>
    </ListGroup>
    </div>
  )
}

export default Graph
