import React, { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarController,
} from 'chart.js'; 

const MyChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {

        ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarController);

        const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'My First Dataset',
                    data: [250, 245, 240, 238, 235, 242],
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    borderWidth: 1,
                },
            ],
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize:65,
                            callback: function (value) {
                                const customTicks = [0, 65, 130, 195, 260];
                                return customTicks.includes(value) ? value : '';
                            },
                        },
                    },
                },
            },
        }
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new ChartJS(document.getElementById('myChart'), config);

    
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        };
    }, []);

    return <canvas id="myChart" width="500" height="300"></canvas>;
};

export default MyChart;


