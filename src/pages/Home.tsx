import Navbar from "@/components/Navbar"
import {  useEffect} from "react"
import Cookies from "js-cookie"
import FirstImage from "../assets/austin-distel-744oGeqpxPQ-unsplash.jpg"
import SecondImage from "../assets/tech-daily-CXklL5ca71w-unsplash.jpg"
import ThirdImage from "../assets/tech-daily-ztYmIQecyH4-unsplash.jpg"
import { Button  } from "@/components/ui/button"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react"
import useDarkContext from "@/components/useDarkContext"
interface AnimatedComponentProps {
  children: ReactNode;
  className?:string;
}



const AnimatedComponent = ({ children ,className}:AnimatedComponentProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home(){
  const {dark,setDark} = useDarkContext();
  
 

  useEffect(()=>{
    const darkmode = Cookies.get('darkMode')
    if(darkmode){
      if(darkmode ==='true'){
        setDark(true)
      }
    }
    else{
      setDark(false)
    }
    
  },[])
  return(

    

    <div className={dark?"dark bg-black text-white":""}>
    <Navbar />
    


    
    
    <section className="firstsect w-full h-[36rem] md:h-screen">
      

    <h1 className="text-3xl px-4 md:px-0 md:text-5xl font-extrabold text-center z-10 absolute top-20 md:top-36 md:w-2/5 md:left-[24rem] text-white ">Begin Your Trading and Investment Journey</h1>
      <p className="text-lg px-1 md:text-xl dark:text-gray-300 text-center z-10 absolute top-[14rem] md:top-[20rem] md:w-2/5 md:left-[24rem] text-white">We also buy and sell bitcoins and gift cards. Enjoy smooth and hassle-free trading with Cryptonetverse.</p>
      



      <div className="overlay"></div>



      
    </section>

    <section className="md:flex justify-between py-5 md:p-10 h-screen ">
      
      <div className="md:w-2/5 px-3 pt-5 text-center md:text-left mb-3 md:mb-0">
        <AnimatedComponent>

        <h2 className="text-[#3333FF] text-3xl md:mt-8 mb-3 font-bold">
          Experience More Than Just Trading
        </h2>
        <p className="text-gray-600 dark:text-gray-300 md:text-base text-sm"> Welcome to our trading and investment platform, where we offer you an experience that goes beyond just trading. We understand that trading and investing are not just about buying and selling assets; it's about the journey, the education, and the community that surrounds it. That's why we provide a comprehensive platform that offers you more than just a place to trade and invest.</p>
        </AnimatedComponent>

      </div>
      <div className="md:w-[638px] mt-10 md:mt-0 md:h-[601px] ">
      <AnimatedComponent>


      <img src={FirstImage} alt="" />
      </AnimatedComponent>
      </div>

    </section>
    <section className="md:flex md:flex-row-reverse py-10 md:justify-between md:p-10 h-screen ">
      <div className="md:w-2/5 px-3 md:pt-5 text-center md:text-left mb-3 md:mb-0">
        <AnimatedComponent>

        <h2 className="text-[#3333FF] text-3xl md:mt-8 mb-3 font-bold">
        Trade Securely and Confidently
        </h2>
        <p className="text-gray-600 dark:text-gray-300 md:text-base text-sm"> At our platform, we prioritize the security and confidence of our traders above all else. With state-of-the-art security measures in place, you can trade with peace of mind, knowing that your assets are safe and protected. Our platform is designed to provide you with the tools and resources you need to make informed decisions and trade confidently. Join us and experience a new level of security and confidence in your trading journey.</p>
        </AnimatedComponent>

      </div>
      <div className="md:w-[638px] mt-10 md:h-[601px] "
      >
        <AnimatedComponent>


      <img src={SecondImage} alt="" />
      </AnimatedComponent>

      </div>

    </section>

    <section className="md:px-10 py-10 mt-8" >
      <AnimatedComponent>

    <h2 className="text-[#3333FF]  text-3xl text-center md:mt-8 mb-12 font-bold">
    Start Trading With Cryptnetverse
        </h2>
        </AnimatedComponent>

        <div className="md:flex text-center mt-3">

      
<div className="md:w-2/6 mb-8 md:mb-0  ">
  <div className="rounded-full mx-auto w-[5rem]  md:w-[8rem] text-3xl pt-6 bg-gray-500 text-center md:pt-12 text-blue-300 font-bold h-[5rem]  md:h-[8rem] md:bg-gray-200 mb-2">
    1

  </div>
  <p className="md:text-xl text-base font-semibold">Registration</p>
  <p className="md:text-base text-sm md:px-0 px-10">Create an account on our trading platform</p>
</div>
<div className="md:w-2/6 mb-8 md:mb-0">
  <div className="rounded-full mx-auto w-[5rem]  md:w-[8rem] text-3xl pt-6 bg-gray-500 text-center md:pt-12 text-blue-300 font-bold h-[5rem]  md:h-[8rem] md:bg-gray-200 mb-2">
        2
  </div>
  <p className="md:text-xl text-base font-semibold">Funding</p>
  <p className="md:text-base text-sm md:px-0 px-9">Fund your account through our deposit methods </p>
</div>
<div className="md:w-2/6 mb-8 md:mb-0 ">
  <div className="rounded-full mx-auto w-[5rem]  md:w-[8rem] text-3xl pt-6  bg-gray-500 text-center md:pt-12 text-blue-300 font-bold h-[5rem]  md:h-[8rem] md:bg-gray-200 mb-2">
      3
  </div>
  <p className="md:text-xl text-base font-semibold">Trade</p>
  <p className="md:text-base text-sm md:px-0 px-9">Watch  your stocks rise</p>
</div>
</div>
<div className="flex justify-center">


<Button className="font-semibold bg-[#3333FF] text-white mt-4">Set Up Your Trading Account </Button>
</div>


    </section>
    <section className="md:flex justify-between py-10 md:py-20 md:px-10 h-screen ">
      <div className="md:w-2/5 px-3 pt-5 md:mt-20 text-center md:text-left mb-3 md:mb-0">
        <h2 className="text-[#3333FF] text-3xl md:mt-8 mb-3 font-bold">
        Connect With Global Markets
        </h2>
        <p className="text-gray-600 md:text-base text-sm dark:text-gray-300">Trade binary options with the best platform, a wide selection of assets, high payouts, lightning-fast order execution, and get personalized customer support around the clock, fast withdrawals, and the expertise of industry leaders.</p>
      </div>
      <div className="md:w-[638px] mt-10 md:mt-5 md:h-[601px] ">

      <img src={ThirdImage} alt="" />
      </div>

    </section>

  <footer className="h-fit text-sm md:text-base py-6 px-3 md:p-10 md:flex md:justify-between bg-[#000037]">

      <div className="mb-5 md:mb-0">

      <h3 className="text-2xl font-bold text-[#3333FF]">CRYPTNETVERSE</h3>
      <p className="md:w-2/5 text-gray-300">We want you to not only trade with global financial markets but also with a simple and user-friendly online platform.</p>
      </div>


      <div className="text-gray-300 mb-8 md:mb-0">
        <h4 className="text-lg font-semibold">Useful Links</h4>
        <ul className="">
          <li>About</li>
          <li>Features</li>
          <li>Process</li>
        </ul>
      </div>
      <div className="text-gray-300">
        <h4 className="text-lg font-semibold">Useful Links</h4>
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Process</li>
        </ul>
      </div>


    </footer>
    
    </div>
  )
}