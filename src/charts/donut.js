import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class DonutChart extends Component {
  render() {
    const options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Donut Chart Example',
      },
      plotOptions: {
        pie: {
          innerSize: '50%', // This creates the donut effect
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          name: 'Data',
          data: [
            ['Category 1', 30],
            ['Category 2', 20],
            ['Category 3', 50],
          ],
        },
      ],
    };

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default DonutChart;
