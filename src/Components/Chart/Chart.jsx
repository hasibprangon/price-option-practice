import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const studentScores = [
        { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 88 },
        { id: 2, name: "Bob", math: 82, physics: 79, chemistry: 84 },
        { id: 3, name: "Charlie", math: 91, physics: 88, chemistry: 86 },
        { id: 4, name: "David", math: 76, physics: 81, chemistry: 80 },
        { id: 5, name: "Ella", math: 85, physics: 89, chemistry: 90 },
        { id: 6, name: "Frank", math: 68, physics: 74, chemistry: 72 },
        { id: 7, name: "Grace", math: 88, physics: 92, chemistry: 85 },
        { id: 8, name: "Hank", math: 94, physics: 91, chemistry: 89 },
        { id: 9, name: "Ivy", math: 73, physics: 77, chemistry: 78 },
        { id: 10, name: "Jack", math: 80, physics: 83, chemistry: 81 }
      ];
      
    return (
        <div>
            <LineChart width={800} height={500} data={studentScores}>
                <XAxis dataKey={`name`}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={`math`} stroke='red'></Line>
                <Line dataKey={`physics`} stroke='green'></Line>
                <Line dataKey={`chemistry`} stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default Chart;