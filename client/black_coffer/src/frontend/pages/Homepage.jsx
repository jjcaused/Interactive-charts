import React from "react";
import Sidenav from "../Sidenav";
import Button from "@mui/material/Button";
import "./style.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <Sidenav />
        <h2 style={{textAlign: "center", marginTop: 50}}>WELCOME!</h2>
        <p>
          The objective of this project is to create a data visualization
          charts using the given JSON data. The JSON data is retrieved from
          MongoDB database using API through node.js. The dashboard has
          Interactive graphs, charts, and visuals using Chart.js library. I have
          implemented MERN stack to design and develop this web app. Navigate
          through Dashboard to view the different charts of the data. You can interact with charts to see which data you want see or not. This is just a simple web app show casing charts. Here are
          my links to my Profile for other projects!
        </p>
        <div className="icon">
          <Button
            onClick={() => {
              window.location.href = "https://github.com/jjcaused";
            }}
            variant="contained"
            sx={{
              backgroundColor: "black",
              "&:hover": { backgroundColor: "black" },
              ":focus": { outline: "none" },
            }}
          >
            {" "}
            <GitHubIcon />
          </Button>
          <Button
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/jayanth-n-2a04b5223/";
            }}
            variant="contained"
            sx={{ ":focus": { outline: "none" } }}
          >
            <LinkedInIcon />
          </Button>
        </div>
      </div>
    </>
  );
};
