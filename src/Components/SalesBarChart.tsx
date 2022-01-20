import React from 'react';
import { VerticalBarChart } from "@fluentui/react-charting";

export const SalesBarChart: React.FC = () => {

    const points = [
        {
          x: "Sep-2021",
          y: 0,
          legend: "Oranges"
        },
        {
          x: "Oct-2021",
          y: 0,
          legend: "Oranges"
        },
        {
          x: "Nov-2021",
          y: 0,
          legend: "Apples"
        },
        {
          x: "Dec-2021",
          y: 0,
          legend: "Apples"
        },
        {
          x: "Jan-2021",
          y: 1500000,
          legend: "Apples"
        }
      ];

    return(
        <VerticalBarChart
            culture={window.navigator.language}
            chartTitle="Vertical bar chart basic example "
            data={points}
            width={200}
            height={350}
            lineLegendText={"just line"}
            lineLegendColor={"brown"}
        />
    )
}