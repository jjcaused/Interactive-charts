import React from "react";
import Sidenav from "../Sidenav";
import "./style.css";
import axios from "axios";
import { Radar } from "react-chartjs-2";
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

export const Pestle = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Relevance Values",
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
        if (acc[curr.pestle]) {
          acc[curr.pestle] += curr.relevance;
        } else {
          acc[curr.pestle] = curr.relevance;
        }
        return acc;
      }, {});

      const labels = Object.keys(aggregatedData);
      const intensities = Object.values(aggregatedData);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Pestle v/s Relevance",
            data: intensities,
            color: "blue",
          
            backgroundColor: ["#be46d7"],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]);

  return (
    <div>
      <div className="pestle">
        <Sidenav />
        <Radar
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
