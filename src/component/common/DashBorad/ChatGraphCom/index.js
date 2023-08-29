import React from 'react';
import Highcharts from 'highcharts'
import { HighchartsReact } from "highcharts-react-official";
import DonutChart from '../../../../charts/donut';

function ChatGraphCom(props) {

    const options = {
        title: {
          text: 'Weekly Report Graph'
        },
        chart: {
          type: 'pie'
      },
        series: [{
          data: [50,25]
        }]
      }

    return (
        <div className='mt-5 grid grid-cols-2 gap-6'>
            <div className='rounded-lg border p-[30px] '>
            <div className="flex items-center justify-between pb-5">
              <h5 className="text-[18px] font-medium text-left">
                Chat
              </h5>
              <div>
                setting
              </div>
            </div>
            </div>
            <div className='rounded-lg border p-[30px] '>
            <div className="flex items-center justify-between pb-5">
              <h5 className="text-[18px] font-medium text-left">
                Weekly Report 
              </h5>
            </div>
            <DonutChart />

            </div>
        </div>
    );
}

export default ChatGraphCom;