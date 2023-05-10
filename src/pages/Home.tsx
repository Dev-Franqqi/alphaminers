import CryptoList from "../components/Cryptolist";
import Navbar from "../components/Homepage/Navbar";
import Initial from "../components/Homepage/Initial";

import Firstsection from "../components/Homepage/Firstsection";
import Thirdcomponent from "../components/Homepage/Thirdcomponent";
import Secondsection from "../components/Homepage/Secondsection";
import Fourthsection from "../components/Homepage/Fourthsection";
import Footer from "../components/Homepage/Footer";

export default function Home() {
  return (
    <div className="font-sans text-white">

   <CryptoList />
   <Navbar />
    
        {/* <img className="mx-auto" src={building} alt="" /> */}
      <Initial />
    <Firstsection />
    <Thirdcomponent />
    <Secondsection />
    <Fourthsection />
    <Footer />

    </div>
    
  )
}