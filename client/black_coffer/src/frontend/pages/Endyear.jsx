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
      .get("http://localhost:3001/getData")
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

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Intensity by Year",
            data: intensities,
            backgroundColor: [
              "#56b982",
              "#be46d7",
              "#3735d1",
              "#89e8ef",
              "#ff4c9e",
              "#e7b7d1",
              "#cb0c63",
              "#e5a624",
              "#54eb21",
              "#e94105",
              "#949de1",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]);

  return (
    <div>
      <Sidenav />
      <div className="endyear">
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Intensities during the Years",
              },

              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
