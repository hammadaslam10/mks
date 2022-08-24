import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {chartData} from '../../data/chartdata'
ChartJS.register(ArcElement, Tooltip, Legend);
  
const Chart = () => {
  return (
    <Doughnut data={chartData} />
  )
}

export default Chart