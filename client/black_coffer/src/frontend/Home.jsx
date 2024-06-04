import React from "react";
import Sidenav from "./Sidenav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Country } from "./pages/Country";
import { Endyear } from "./pages/Endyear";
import { Pestle } from "./pages/Pestle";
import { Region } from "./pages/Region";
import { Sector } from "./pages/Sector";
import { Source } from "./pages/Source";
import { Topics } from "./pages/Topics";

const Home = () => {
  return (
    <div>
      {/* <Sidenav /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/country" element={<Country />} />
          <Route path="/endyear" element={<Endyear />} />
          <Route path="/pestle" element={<Pestle />} />
          <Route path="/region" element={<Region />} />
          <Route path="/Sector" element={<Sector />} />
          <Route path="/Source" element={<Source />} />
          <Route path="/Topics" element={<Topics />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
