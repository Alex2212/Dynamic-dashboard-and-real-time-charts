import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from '../Datasets/weather';
import { Box } from '@mui/material'; // Import Box for container

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],

  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-40px, 0)',
    },
  },
};

export default function BarsWeather() {
  return (
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'london', label: 'London', valueFormatter },
          { dataKey: 'paris', label: 'Paris', valueFormatter },
          { dataKey: 'newYork', label: 'New York', valueFormatter },
          { dataKey: 'seoul', label: 'Seoul', valueFormatter },
        ]}
        {...chartSetting}
        sx={{
          width: '100%',  // Make chart take full width
          height: '100%', // Make chart take full height of its parent
        }}
      />
      );
}