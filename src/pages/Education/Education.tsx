'use client'
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { Link } from "react-router-dom"
import { IoIosArrowDropright } from "react-icons/io";
export default function Education(){
    const router = useNavigate()
    const gotoHome = ()=>{
        router('/')
    }
    const [darkMode,setdarkMode] = useState(false)
    const setToDarkMode = ()=>{
        setdarkMode(true);
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setdarkMode(false);
        Cookies.set('dark','false')
    }


    useEffect(()=>{
        const dark = Cookies.get('dark');
        if(dark){
          if(dark==='true'){
            setdarkMode(true)
          }
        }
        else{
          setdarkMode(false)
          
        }
      },[])

    return(
        <>

        <div className={darkMode?' px-2 dark bg-black md:h-screen text-gray-300':' px-2 md:h-screen'}>
            <nav className="flex justify-between">


            <div className="py-2 gap-3 flex">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={gotoHome} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg><header className="text-xl font-bold">Education</header></div>
{!darkMode &&  <svg
    onClick={setToDarkMode}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mt-2 md:text-black mr-2 hover:text-[#8670FC]"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    />
</svg>}
{darkMode && <svg xmlns="http://www.w3.org/2000/svg" onClick={setLightMode} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 mt-2 text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
}

</nav>

<main className="p-2">

      <h1 className="text-center font-bold mb-7">Beginner</h1>  
        
    <h2 className="text-4xl mb-5 font-semibold ">What is Forex?</h2> 
    <p className="mb-4">
    The foreign exchange market – also known as forex or the FX market – is the world’s most traded market, with turnover of $5 trillion per day. To put this into perspective, the U.S. stock market trades around $257 billion a day; quite a large sum, but only a fraction of what forex trades. Forex is traded 24 hours a day, 5 days a week across by banks, institutions and individual traders worldwide. Unlike other financial markets, there is no centralized marketplace for forex, currencies trade over the counter in whatever market is open at that time.</p>       
        
        

        <h2 className="font-semibold text-2xl mb-1">How Forex Trading Works</h2>

        <p className="mb-4">
        Trading forex involves the buying of one currency and simultaneous selling of another.
In forex, traders attempt to profit by buying and selling currencies by actively speculating on the direction currencies are likely to take in the future.
        </p>
        


        <h3 className="mb-1 text-2xl font-semibold">Where can I Trade Forex</h3>
        <p className="mb-4">You can trade forex 24 hours a day, five days a week. The foreign exchange markets are worldwide and therefore follow a 24-hour global timetable.</p>

        <p className="mb-4">The trading week for forex begins on Monday morning in Sydney, Australia and follows the sun westward as the world’s major capital markets open and close from Tokyo to London and finally closing on Friday evening in New York.</p>
</main>

        
        
        <div className="flex justify-end pb-3 mt-6">

        
        <Link className="text-[#8670FC] flex font-semibold text-right" to="/education/intermediate">Intermediate <IoIosArrowDropright className="text-2xl ml-2" /></Link>
        </div>
        </div>

        </>
    )
}