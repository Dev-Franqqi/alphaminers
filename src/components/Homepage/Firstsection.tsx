import {motion,Transition} from "framer-motion"
export default function() {

  const transit :Transition ={
    duration:2,
    delay:1,
    ease:'easeInOut'
  }
  return (
    <motion.section initial={{opacity:0}}animate={{opacity:1}} transition={transit} className="text-center  text-white pt-7 px-2">

    <h2 className="text-3xl font-bold mb-8">Putting our investors first is Key</h2>

    <p className="mb-5 font-semibold">We are committed to providing all our investors with exceptional service while offering our team the best training</p>

    <p className="mb-10 ">
    ALPHA CRYPTO MINERS is an International online broker that has been actively operating in the Crypto & Stocks Trading trading markets. With our advanced, web-based trading platform, you can trade on the largest lists of assets in the industry. From Currency pairs, and Commodities to stocks and indices, we have it all. Keep your trading costs down with competitive spreads, commissions and low margins. View spreads on our most popular cash instruments.
    </p>
   <h2 className='text-3xl font-bold mb-8'>Experience more than Trading</h2> 
<p>We follow a very strict and disciplined process for investment, as we are aware, that we are dealing with our client’s funds. Investment means a lot to us, and we respect the trust of our clients.</p>


</motion.section>
  )
}