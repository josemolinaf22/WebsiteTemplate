import React from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { Services } from "./Components/Services";
import { Jobs } from "./Components/Jobs";
import { Footer } from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
