import CryptoList from "../components/Cryptolist";
import Navbar from "../components/Homepage/Navbar";
import React from 'react'
import building from '../assets/pngbuildingcom.png'
import Firstsection from "../components/Homepage/Firstsection";
import Thirdcomponent from "../components/Homepage/Thirdcomponent";
import Secondsection from "../components/Homepage/Secondsection";
import Fourthsection from "../components/Homepage/Fourthsection";
import Footer from "../components/Homepage/Footer";

export default function Home({}: Props) {
  return (
    <div className="font-sans">

   <CryptoList />
   <Navbar />
    
        <img className="mx-auto" src={building} alt="" />
    <Firstsection />
    <Thirdcomponent />
    <Secondsection />
    <Fourthsection />
    <Footer />

    </div>
    
  )
}