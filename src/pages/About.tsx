'use client'
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
export default function About(){
    const navigate = useNavigate()
    const gotoHome = ()=>{
        navigate('/')
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

        <div className={darkMode?' px-2 dark bg-black text-white':' px-2 '}>
            <nav className="flex justify-between">


            <div className="py-2 gap-3 flex">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={gotoHome} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg><header className="text-xl font-bold">About Us</header></div>
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

<main className="text-base px-2 pt-10">
<p>
Cryptnetverse is one of the leading platforms in Switzerland offering Crude Oil Trading, Forex and spreads. Regulated by the CFTC and based in New York, with member funds held in segregated accounts in major US banks, Cryptnetverse offers secure and innovative ways to participate in the markets.
    </p>
    <p className="mt-4">
    Using Cryptnetverse online, traders can take positions on short-term price movements in a wide range of markets. From one account, you can trade stock indices, forex, commodities, bitcoin, and economic events. With 5000 hourly, daily and weekly contracts traded 5 days a week, 24 hours a day, Cryptnetverse traders get an ongoing series of short-term trading opportunities.
    </p>

    <p className="mt-4">
    We help our clients trade financial markets on leverage through CFDs. This product allows you to find opportunity in both rising and falling markets, and isn&apos;t confined to one asset class – you can choose to trade on indices, forex, shares, commodities and more:
    </p>
    <p className="mt-4">
    Cryptnetverse is also regulated by the International Financial Services Commission of Belize, as well as the Cyprus Securities and Exchange Commission, licensed by the Financial Services Board (FSB) of Switzerland. The company is also registered with the Financial Conduct Authority of the UK.

    </p>

    <section className="mt-5">


    <h1 className="text-4xl font-bold mb-3">Quick Facts</h1>
    <ul className=" list-disc px-2">
    <li>US-based, CFTC-regulated exchange</li>
    <li>Member funds held in segregated US bank accounts</li>


        <li>Limited risk with predefined maximum possible loss</li>
        <li>Low minimum opening account balance</li>
    </ul>
    <h2>Get Started. Fill out our online application in just a few minutes</h2>
    </section>

    
</main>


        </div>
        
        </>
    )
}