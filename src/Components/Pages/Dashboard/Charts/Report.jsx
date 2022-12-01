// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   }, scales: {
//     // to remove the labels
//     x: {
//       ticks: {
//         display: false,
//       },

//       // to remove the x-axis grid
//       grid: {
//         drawBorder: false,
//         display: false,
//       },
//     },
//     // to remove the y-axis labels
//     y: {
//       ticks: {
//         display: false,
//         beginAtZero: true,
//       },
//       // to remove the y-axis grid
//       grid: {
//         drawBorder: false,
//         display: false,
//       },
//     },
//   }
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       fill: true,
//       label: 'Total reports',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export default function Report() {
//   return <Line options={options} data={data} />;
// }
import React from "react";

export default function Report() {
  return <div>Report</div>;
}
