import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import MemeGenerator from "./components/memeGenerator";

function App() {
  return (
    <div id="app-div">
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
