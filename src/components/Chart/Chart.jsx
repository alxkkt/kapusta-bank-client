import descriptionArray from './funcs/descriptionArray';
import styles from './Chart.module.scss';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const Chart = ({ transactions, openCategory }) => {
  const isTabOrPc = useMediaQuery({ query: '(min-width:768px)' });
  const chosenCategory = transactions.filter(
    ({ category }) => category === openCategory
  );
  const dataForChart = descriptionArray(chosenCategory);
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },

        grid: {
          display: true,
          drawBorder: false,
        },
      },
    },

    plugins: {
      datalabels: {
        color: 'blue',
        labels: {
          title: {
            font: {
              weight: 'bold',
            },
          },
          value: {
            color: 'green',
          },
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  console.log(isTabOrPc);
  const data = {
    datasets: [
      {
        datalabels: {
          color: '#FFCE56',
        },
        label: false,
        backgroundColor: '#FF751D',
        data: dataForChart,
        borderRadius: 10,
        barThickness: isTabOrPc ? 40 : 15,
      },
    ],
  };

  const renderContent = openCategory && (
    <div className={styles.div}>
      <Bar plugins={[ChartDataLabels]} options={options} data={data} />
    </div>
  );
  return renderContent;
};
export default Chart;
