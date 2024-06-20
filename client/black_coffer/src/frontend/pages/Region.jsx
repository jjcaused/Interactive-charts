import React, { useEffect, useState } from "react";
import Sidenav from "../Sidenav";
import "./style.css";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  DoughnutController,
  ArcElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js/auto";

ChartJS.register(DoughnutController, ArcElement, Title, Legend, Tooltip);

export const Region = () => {
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
        borderColor: "",
        borderWidth: 1,
      },
    ],
  });
  axios.defaults.withCredentials = true;
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
        if (curr.country && curr.country.trim() !== "") {
          if (acc[curr.country]) {
            acc[curr.country] += curr.likelihood;
          } else {
            acc[curr.country] = curr.likelihood;
          }
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
            label: "Likelihood count",
            data: intensities,
            backgroundColor: backgroundColors,
            borderColor: "black",
          },
        ],
      });
    }
  }, [data]);

  return (
    <>
      <div>
        <div className="region">
          <Sidenav />
          <Doughnut
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Likelihood to live in each Region",
                },

                legend: {
                  display: true,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
