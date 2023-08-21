import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Drive from "./pages/Drive";
import Inbox from "./pages/Inbox";
import Rooms from "./pages/Rooms";
import BigProfile from "./pages/BigProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Drive" element={<Drive />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/BigProfile" element={<BigProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
