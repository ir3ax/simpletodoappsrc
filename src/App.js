import React from "react";
import DashHolder from "./components/dashboard";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/simpletodoapp" element={<HomePage />}/>
      <Route path="/dashboard" element={<DashHolder />} />
    </Routes>
   </Router>
  );
};

export default App;
