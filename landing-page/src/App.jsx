import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-[#222222]">
      <Header />
      <Content />
    </div>
  );
}

export default App;
