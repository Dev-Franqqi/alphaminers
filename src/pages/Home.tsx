import CryptoList from "../components/Cryptolist";
import Navbar from "../components/Homepage/Navbar";
import Initial from "../components/Homepage/Initial";
import { Transition,Variants, motion } from "framer-motion";
import Firstsection from "../components/Homepage/Firstsection";
import Thirdcomponent from "../components/Homepage/Thirdcomponent";
import Secondsection from "../components/Homepage/Secondsection";
import Fourthsection from "../components/Homepage/Fourthsection";
import Footer from "../components/Homepage/Footer";

export default function Home() {
  const transits:Transition ={
    opacity:1,
     duration:2,
      ease:'easeInOut'
    }
    const vari:Variants={
      hidden:{opacity:0},
      visible:{opacity:1}
    }
4

  return (
    <motion.div initial={'hidden'} animate={'visible'} variants={vari} transition={transits} className="font-sans text-white">

   <CryptoList />
   <Navbar />
    
        {/* <img className="mx-auto" src={building} alt="" /> */}
      <Initial />
    <Firstsection />
    <Thirdcomponent />
    <Secondsection />
    <Fourthsection />
    <Footer />

    </motion.div>
    
  )
}