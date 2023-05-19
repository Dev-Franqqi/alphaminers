import CryptoList from "../components/Cryptolist";
import Navbar from "../components/Homepage/Navbar";
import Initial from "../components/Homepage/Initial";
import { Transition,Variants, motion } from "framer-motion";
import Firstsection from "../components/Homepage/Firstsection";
import Thirdcomponent from "../components/Homepage/Thirdcomponent";
import Secondsection from "../components/Homepage/Secondsection";
import Fourthsection from "../components/Homepage/Fourthsection";
import Footer from "../components/Homepage/Footer";
import { Link } from "react-router-dom";
import whatsapps from "../assets/whatsapp.png"
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
    const whatsappt:Transition = {
      opacity:1,
      delay:4,
      duration:6,
      ease:'easeIn'

    }


  return (
    <motion.div initial={'hidden'} animate={'visible'} variants={vari} transition={transits} className="font-sans text-white">
     
   <CryptoList />
   <Navbar />

   <motion.div initial='hidden' animate='visible' variants={vari} transition={whatsappt} className="bg-gray-200 md:bottom-2 fixed bottom-72 right-0  md:right-0 w-40 rounded "><Link className="flex" to='https://wa.me/+2347047669823'>
     <img src={whatsapps} width={50} alt="" />
     <span className=" text-black self-center">Chat with us</span>
   </Link>

      </motion.div> 
    
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