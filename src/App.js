import React from "react";
import "./app.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Body from "./Components/Body/Body1";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
};

export default App;
