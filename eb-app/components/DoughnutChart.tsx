'use client'

import {Chart as ChartJS, ArcElement, Tooltip, Legend} 
from 'chart.js'
import {Doughnut} from 'react-chartjs-2'


ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
  const data = {
    labels: ['Bank 1', 'Bank 2', ], //accounts.map((account) => account.name),
    datasets: [{
      label: 'Banks',
      data: [100, 200], //accounts.map((account) => account.currentBalance),
      backgroundColor: ['#0074D9', '#FF4136'],
    }]
  }
  return <Doughnut data={data}
  options={
    {
    cutout : '55%',
    plugins : {
        legend: {
            display: false,
          },
    }
    }
  }
   />
}

export default DoughnutChart