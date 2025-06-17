import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';


const RealTimeCores = () => {
  // Initialize with 16 cores (0-100% usage)
  const [data, setData] = useState<{ core: string; usage: number }[]>([
    { core: 'Core 1', usage: 50 },
    { core: 'Core 2', usage: 50 },
    { core: 'Core 3', usage: 50 },
    { core: 'Core 4', usage: 50 },
    { core: 'Core 5', usage: 50 },
    { core: 'Core 6', usage: 50 },
    { core: 'Core 7', usage: 50 },
    { core: 'Core 8', usage: 50 },
    { core: 'Core 9', usage: 50 },
    { core: 'Core 10', usage: 50 },
    { core: 'Core 11', usage: 50 },
    { core: 'Core 12', usage: 50 },
    { core: 'Core 13', usage: 50 },
    { core: 'Core 14', usage: 50 },
    { core: 'Core 15', usage: 50 },
    { core: 'Core 16', usage: 50 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate CPU usage for each core in 5% increments (0, 5, 10, ..., 100)
      const newData = data.map((core) => ({
        core: core.core,
        usage: Math.round(Math.random() * 20) * 5, // Random 0-100 in 5% steps
      }));

      // Update data with new values
      setData(newData);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [data]);

  // Custom formatter to add '%' symbol to the values in the tooltip
  const valueFormatter = (value: number) => `${value}%`;

  return (
    <BarChart
      dataset={data}
      series={[
        {
          dataKey: 'usage',
          label: 'CPU Usage',
          valueFormatter, // Add % sign
        },
      ]}
      xAxis={[{ scaleType: 'band', dataKey: 'core' }]} // Core names as X-axis labels
      yAxis={[{ label: 'Usage (%)' }]} // Y-axis label
      grid={{ vertical: true, horizontal: true }} // Grid for clarity
      sx={{
        width: '100%',
        height: '350px',
      }}
      slotProps={{ legend: { hidden: true } }} // Hide the legend
    />
  );
};

export default RealTimeCores;
