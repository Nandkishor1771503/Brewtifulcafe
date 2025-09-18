import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Scroller from "./components/Scroller";
import MenuCards from "./components/MenuCards";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import LenisProvider from "./components/LenisProvider";
import MenuList from "./components/MenuList";
function App() {
  return (
    <>
      <LenisProvider>
        <Navbar />
        <Hero />
        <Scroller />
        <MenuCards />
        <MenuList />

        <Reviews />
        <Footer />
      </LenisProvider>
    </>
  );
}

export default App;
