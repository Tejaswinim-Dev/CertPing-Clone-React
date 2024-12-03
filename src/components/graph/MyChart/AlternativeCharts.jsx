import React, { useState, useEffect } from 'react';
import MyChart from './mycharts/MyChart';
import PerformanceGraph from './performancecharts/PerformanceChart';

const AlternateCharts = () => {
  const [showMyChart, setShowMyChart] = useState(true);
  const [showText, setShowText] = useState('Showing Response Time (ms)');

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMyChart((prev) => {
        setShowText(prev ? 'Showing Uptime (%)' : 'Showing Response Time (ms)');
        return !prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {showMyChart ? <MyChart /> : <PerformanceGraph />}
      <p style={{color:"rgb(114,114,123)",textAlign:"center",margin:"10px"}}>{showText}</p>

    </div>
  );
};

export default AlternateCharts;

