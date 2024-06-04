import React, { useEffect, useState } from "react";
import Sidenav from "../Sidenav";
import "./style.css";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Legend,
  Tooltip
);

export const Sector = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Intensity by Sector",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#000",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
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
        if (acc[curr.sector]) {
          acc[curr.sector] += curr.intensity;
        } else {
          acc[curr.sector] = curr.intensity;
        }
        return acc;
      }, {});

      const labels = Object.keys(aggregatedData);
      const intensities = Object.values(aggregatedData);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Intensities by Sector",
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
          },
        ],
      });
    }
  }, [data]);

  return (
    <>
      <div>
        <Sidenav />
        <div className="testing">
          <Bar
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Intensities in each sector",
                },

                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
