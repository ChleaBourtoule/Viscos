import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Pitches from "./components/Pages/Pitches";
import Services from "./components/Pages/Services";
import Activities from "./components/Pages/Activities";
import Prices from "./components/Pages/Prices";
import Booking from "./components/Pages/Booking";
import Region from "./components/Pages/Region";
import Contact from "./components/Contact";

function App() {
  const [language, setLanguage] = useState("fr");
  return (
    <div className="App">
      <Router>
        <Header language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home lang={language} />} />
          <Route path="/pitches" element={<Pitches lang={language} />} />
          <Route path="/services" element={<Services lang={language} />} />
          <Route path="/activities" element={<Activities lang={language} />} />
          <Route path="/prices" element={<Prices lang={language} />} />
          <Route path="/booking" element={<Booking lang={language} />} />
          <Route path="/region" element={<Region lang={language} />} />
        </Routes>
        <Contact lang={language} />
      </Router>
    </div>
  );
}

export default App;
