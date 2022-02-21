import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Pitches from "./components/Pages/Pitches";
import Services from "./components/Pages/Services";
import Activities from "./components/Pages/Activities";
import Prices from "./components/Pages/Prices";
import Booking from "./components/Pages/Booking";
import Region from "./components/Pages/Region";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pitches" element={<Pitches />} />
          <Route path="/services" element={<Services />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/region" element={<Region />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
