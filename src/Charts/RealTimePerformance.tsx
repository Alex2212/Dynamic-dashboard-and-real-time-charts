import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const RealTimePerformance = () => {
  // Initialize with 20 samples (x values from 0 to 19)
  const [data, setData] = useState<{ x: number; core1: number; core2: number; core3: number; core4: number }[]>(
    Array.from({ length: 20 }, (_, i) => ({
      x: i,
      core1: 50, // Start with 50% CPU load
      core2: 50,
      core3: 50,
      core4: 50,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate CPU usage for each core in 5% increments (0, 5, 10, 15, ..., 100)
      const newDataPoint = {
        x: data[data.length - 1].x + 1, // Increment x value
        core1: Math.round(Math.random() * 20) * 5, // Random 0-100 in 5% steps
        core2: Math.round(Math.random() * 20) * 5,
        core3: Math.round(Math.random() * 20) * 5,
        core4: Math.round(Math.random() * 20) * 5,
      };

      // Update data by removing the oldest point and adding the new point
      setData((prevData) => {
        const updatedData = [...prevData.slice(1), newDataPoint];
        updatedData.forEach((point, index) => {
          point.x = index; // Reassign x to create a continuous sequence from 0 to 19
        });

        return updatedData;
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, [data]);

  // Custom formatter to add '%' symbol to the values in the tooltip
  const valueFormatter = (value: number) => `${value}%`;

  return (
    <LineChart
      dataset={data}
      xAxis={[{ dataKey: 'x', label: 'Time (s)', reverse: false,  }]}
      series={[
        { curve: 'catmullRom', dataKey: 'core1', label: 'Core 1', color: 'red',area: false, valueFormatter },
        { curve: 'catmullRom', dataKey: 'core2', label: 'Core 2', color: 'purple',area: false, valueFormatter },
        
        
      ]}
      grid={{ vertical: true, horizontal: true }}
      className="pb-4"
    />
  );
};

export default RealTimePerformance;