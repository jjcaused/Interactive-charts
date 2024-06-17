import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidenav from "../Sidenav";
import Paper from "@mui/material/Paper";
import "./style.css";

export const Topics = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3001/getData")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    getData();
  }, []);

  const getUniqueTopics = (data) => {
    const seenTopics = new Set();
    return data.filter((info) => {
      if (seenTopics.has(info.topic)) {
        return false;
      } else {
        seenTopics.add(info.topic);
        return true;
      }
    });
  };

  const uniqueTopics = getUniqueTopics(data);

  return (
    <div className="topics">
      <h1
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
          marginLeft: 300,
        }}
      >
        VARIOUS TOPICS IN THIS DATA
      </h1>
      <div className="paper">
        <Sidenav />

        {uniqueTopics.length > 0 ? (
          uniqueTopics.map((info, index) => (
            <Paper
              key={index}
              elevation={10}
              className="topics-paper"
              sx={{ bgcolor: "aliceblue" }}
            >
              {info.topic}
            </Paper>
          ))
        ) : (
          <p>No topics available</p>
        )}
      </div>
    </div>
  );
};
