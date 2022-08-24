import React, { useEffect, useState } from "react";
import './timer.css'
import {BsClockHistory} from 'react-icons/bs'

const Timer = () => {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-09-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        "Hours": Math.floor((difference / (1000 * 60 * 60)) % 24),
        ":": Math.floor((difference / 1000 / 60) % 60),
         "": Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <React.Fragment>
      <div className='timer'>
        <p className="clockheader">ADDINGTON</p>
        <BsClockHistory className="clocktime"/>
        <p className="clocktimer">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
      </div>
    </React.Fragment>
  )
}

export default Timer
