import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', uptime: 99.9 },
  { month: 'Feb', uptime: 99.95},
  { month: 'Mar', uptime: 99.99 },
  { month: 'Apr', uptime: 99.98 },
  { month: 'May', uptime: 100 },
  { month: 'Jun', uptime: 99.97 },
];

const PerformanceChart = () => {
    return (
        
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUptime" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis domain={[99.8, 100]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uptime"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorUptime)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  };
  
  export default PerformanceChart;
  