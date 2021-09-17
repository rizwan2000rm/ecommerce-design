import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="layout">
        <Navbar />
        <Hero />
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;
