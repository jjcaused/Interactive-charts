import React from "react";
import Sidenav from "../Sidenav";
import "./style.css";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Legend,
  Tooltip
);

export const Endyear = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Intensity by Sector",
        data: [],
        backgroundColor: ["#000"],
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  });

  const getData = () => {
    axios
      .get("https://interactive-charts.vercel.app/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const aggregatedData = data.reduce((acc, curr) => {
        if (acc[curr.end_year]) {
          acc[curr.end_year] += curr.intensity;
        } else {
          acc[curr.end_year] = curr.intensity;
        }
        return acc;
      }, {});

      const labels = Object.keys(aggregatedData);
      const intensities = Object.values(aggregatedData);
      const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
  
      const backgroundColors = labels.map(() => generateRandomColor());

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Intensity by Year",
            data: intensities,
            backgroundColor: backgroundColors,
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]);

  return (
    <div>
      <div className="endyear">
        <Sidenav />
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Intensities during the Years",
              },

              legend: {
                display: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
