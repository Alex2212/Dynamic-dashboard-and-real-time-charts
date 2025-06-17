import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { dataset } from '../Datasets/GDPperCapita';

export default function StackedAreasGDP() {
  return (
    <LineChart
      dataset={dataset}
      xAxis={[
        {
          id: 'Years',
          dataKey: 'date',
          scaleType: 'time',
          valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: 'France',
          label: 'French GDP per capita',
          dataKey: 'fr',
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'Germany',
          label: 'German GDP per capita',
          dataKey: 'dl',
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'United Kingdom',
          label: 'UK GDP per capita',
          dataKey: 'gb',
          stack: 'total',
          area: true,
          showMark: false,
        },
      ]}
      
      margin={{ left: 70 }}
    />
  );
}