import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import useDarkContext from "@/components/useDarkContext"
export default function Pricing(){
    const {dark} = useDarkContext()
    const navigate = useNavigate()
    const gotoHome = ()=>{
        navigate('/')
    }
    return(

        <div className={dark?'bg-black text-white':" "}>
        <nav className="pl-3 py-3">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={gotoHome} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
       
        </nav>
        
        <section id="pricing" className="py-10 px-5 md:px-10 mt-20 text-[#8670FC]">
              <h3 className="text-center font-bold text-2xl mb-10 md:text-3xl">
                ACCOUNT TYPES
              </h3>
              <div className="md:flex md:gap-x-3 px-2">


              <div className="text-center  border py-9 text-sm rounded-md mb-7   md:w-2/6 dark:border-white">
                <p className="font-semibold">Custom</p>
                <p className="font-bold text-2xl mb-3 ">200 $/EUR MINNIMUM</p>
                <ul className=" mb-6 text-base  dark:text-[#8670FC] md:text-lg">
                  <li className="mb-3">
                    Trading Instruments: 36 currency pairs, metals,
                    cryptocurrencies
                  </li>
                  <li className="mb-3">Spread: Floating from 1.3 pips</li>
                  <li className="mb-3">Maximum Leverage: 1:2000</li>
                  <li className="mb-3">Return on Investment:10%</li>
                  <li>Deposit Bonuses: All Offers</li>
                </ul>

                <Button onClick={()=>navigate('/signup')} className="border-2 dark:bg-black dark:hover:bg-[#8670FC] dark:hover:text-white  hover:bg-[#8670FC] hover:text-white font-semibold md:mt-6 dark:text-[#8670FC]">
                  Choose Plan
                </Button>
              </div>
              <div className="text-center  border py-9 text-sm rounded-md mb-7   md:w-2/6 dark:border-white">
                <p className="font-semibold">STARTER</p>
                <p className="font-bold text-2xl mb-3 ">1000 $/EUR</p>
                <ul className=" mb-6 text-base  dark:text-[#8670FC] md:text-lg">
                  <li className="mb-3">
                    Trading Instruments: 36 currency pairs, metals,
                    cryptocurrencies
                  </li>
                  <li className="mb-3">Spread: Floating from 1.3 pips</li>
                  <li className="mb-3">Maximum Leverage: 1:2000</li>
                  <li className="mb-3">Return on Investment:10%</li>
                  <li>Deposit Bonuses: All Offers</li>
                </ul>

                <Button onClick={()=>navigate('/signup')} className="border-2 dark:bg-black dark:hover:bg-[#8670FC] dark:hover:text-white  hover:bg-[#8670FC] hover:text-white font-semibold md:mt-6 dark:text-[#8670FC]">
                  Choose Plan
                </Button>
              </div>
              <div className="text-center border px-4 py-9 text-sm rounded-md mb-7 md:w-2/6  dark:border-white">
                <p className="font-semibold ">BASIC</p>
                <p className="font-bold text-2xl mb-3 "> 5000 $/EUR</p>
                <ul className="mb-6 text-base  dark:text-[#8670FC] md:text-lg">
                  <li className="mb-3">
                    Trading Instruments: 36 currency pairs,CbFDs on US
                    stocks,CFDs on indices,CFDs on oil, cryptocurrencies
                  </li>
                  <li className="mb-3">Spread: Floating from 1.3 pips</li>
                  <li className="mb-3">Maximum Leverage: 1:2000</li>
                  <li className="mb-3">Return on Investment:15%</li>
                  <li className="mb-3">Deposit Bonuses: All Offers</li>
                </ul>

                <Button onClick={()=>navigate('/signup')} className="border-2 dark:hover:bg-[#8670FC] dark:hover:text-white dark:bg-black hover:bg-[#8670FC] hover:text-white  font-semibold md:mt-6 text-[#8670FC]">
                  Choose Plan
                </Button>
              </div>
              <div className="text-center border px-4 py-9 text-sm rounded-lg mb-7 md:w-2/6  dark:border-white">
                <p className="font-semibold">PREMIUM</p>
                <p className="font-bold   mb-3 text-2xl">10,000 $/EUR</p>
                <ul className="mb-6 text-base  dark:text-[#8670FC] md:text-lg">
                  <li className="mb-3">
                    Trading Instruments: 36 currency pairs,CFDs on US
                    stocks,CFDs on indices,CFDs on oil, cryptocurrencies
                  </li>
                  <li className="mb-3">Spread: Floating from 1.3 pips</li>
                  <li className="mb-3">Maximum Leverage: 1:500</li>
                  <li className="mb-3">Return on Investment:20%</li>
                  <li className="mb-3">Deposit Bonuses: All Offers</li>
                  <li className="mb-3">Loyalty Bonuses: All Offers</li>
                </ul>

                <Button onClick={()=>navigate('/signup')} className="border-2 dark:hover:bg-[#8670FC] dark:hover:text-white hover:bg-[#8670FC] hover:text-white text-[#8670FC] dark:bg-black font-semibold">
                  Choose Plan
                </Button>
              </div>
              </div>

            </section>
</div>
    )
}