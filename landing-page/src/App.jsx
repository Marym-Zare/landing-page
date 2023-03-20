import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-[#222222]">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
