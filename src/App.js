import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage}></Route>
    </div>
  );
}

export default App;
