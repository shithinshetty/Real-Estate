import { useState } from "react";

import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hello from "./Components/Hello/Hello";
import Contact from "./Components/Contact/Contact";
import Sponsors from "./Components/Sponsors/Sponsors";
import Popular from "./Components/Popular/Popular";
import Listing from "./Components/Listing/Listing";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Hello />
      <Sponsors />
      <Popular />
      <Listing />
      <About />
    </>
  );
}

export default App;
