import React from 'react'

type Props = {}

export default function Fourthsection({}: Props) {
  return (
    
<>
    <section  className="p-8">
    <h5 id='market' className='text-3xl  font-bold text-center'>Account Types</h5>


        <div className="md:flex w-full  ">
    {/* <img src={raisingHand} className='hidden md:flex' alt="" width={400} /> */}
            

    <div className="my-10 md:w-2/6 md:flex md:flex-col gap-5">

    <h5 className="border-l-8 border-l-gray-300 font-bold pl-5 my-5 ">STARTER</h5>
        <ul className="leading-10 text-sm  md:leading-10">
            <li>✓Trading Instruments: 36 currenct pairs, Metals,  Cryptocurrencies
            </li>
            <li>✓Minnimum deposit: 1,000 USD /1,000 EUR</li>
            <li>✓Spread: Floating from 1.3 pips</li>
            <li>✓Maximum leverage: 1:2000</li>
            <li>✓Return on Investment: 10%
                
            </li>
            <li>✓Deposit bonuses: All offers</li>
            <li>✓Loyalty bonuses: Al offers</li>
        </ul>
        <button className='bg-sky-600 w-2/5 text-white rounded px-4 py-2' >Choose Plan</button>
    </div>

    <div className="my-10  md:w-2/6 md:mx-4">

<h5 className="border-l-8 border-l-gray-300 font-bold pl-5 my-5 ">BASIC</h5>
    <ul className="leading-10 text-sm md:leading-10 ">
        <li>✓Trading Instruments: 36 currenct pairs, Metals,CFD on US Stocks,CFD on Indices, CFD on Oil,Cryptocurrnecies 
        </li>
        <li>✓Minnimum deposit: 5,000 USD /5,000 EUR</li>
        <li>✓Spread: Floating from 1.3 pips</li>
        <li>✓Maximum leverage: 1:2000</li>
        <li>✓Return on Investment: 15%
            
        </li>
        <li>✓Deposit bonuses: All offers</li>
        <li>✓Loyalty bonuses: Al offers</li>
    </ul>
    <button className='bg-sky-600 text-white rounded py-2 px-4' >Choose Plan</button>

    
</div>



    <div className="my-10 md:w-2/6 mx-4">

    <h5 className="border-l-8 border-l-gray-300 text-lg font-bold pl-5 my-5 ">CORE</h5>
        <ul className="leading-9 text-sm   md:leading-10">
            <li>✓Trading Instruments: 36 currenct pairs, Metals,CFD on US Stocks,CFD on Indices, CFD on Oil,Cryptocurrnecies 
            </li>
            <li>✓Minnimum deposit: 10,000 USD /10,000 EUR</li>
            <li>✓Spread: Floating from 0 pips</li>
            <li>✓Maximum leverage: 1:500</li>
            <li>✓Return on Investment: 20%
                
            </li>✓
            <li>✓Deposit bonuses: All offers</li>
            <li>✓Loyalty bonuses: Al offers</li>
        </ul>
        <button className='bg-sky-600 text-white rounded py-2 px-4' >Choose Plan</button>
      
    </div>
    </div>
    
    


    <div className="md:flex w-full  md:flex-row-reverse  ">


    <div className="my-10 md:w-2/6 md:mx-4">

    <h5 className="border-l-8 border-l-gray-300 text-lg font-bold pl-5 my-5 ">ADVANCED</h5>
        <ul className="leading-9 md:leading-10 text-sm ">
         <li>✓ Trading Instruments: More than 12,000: Indices, Real stocks, CFD on stocks, Forex and ETF, CFDs on Oil, CFDs on Metals, CFDs on Brazil Stocks, Cryptocurrencies</li>
            <li>✓Minnimum deposit: 5,000 USD /05,000 EUR</li>
            <li>✓Spread: Floating from 0.01 USD</li>
            <li>✓Maximum leverage: 1:300</li>
            <li>✓Return on Investment: 25%</li>
            <li>✓Deposit bonuses: All offers</li>
            <li>✓Loyalty bonuses: Al offers</li>
        </ul>
        <button className='bg-sky-600 text-white rounded px-4 py-2' >Choose Plan</button>
      
    </div>

     
    <div className="my-10 md:w-2/6 md:mx-4">

    <h5 className="border-l-8 border-l-gray-300 text-lg font-bold pl-5 my-5 ">PREMIUM</h5>
        <ul className="leading-9 text-sm  md:leading-10 ">
            <li>✓ Tradin Instruments: 28 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies.

    </li>
            <li>✓Minnimum deposit: 250,000 USD /250,000 EUR</li>
            <li>✓Spread: Floating from 0 pips</li>
            <li>✓Maximum leverage: 1:300</li>
            <li>✓Return on Investment: 30%
                
            </li>
            <li>✓Deposit bonuses: All offers</li>
            <li>✓Loyalty bonuses: Al offers</li>
        </ul>
        <button className='bg-sky-600 text-white rounded px-4 py-2' >Choose Plan</button>
     
    </div>
   </div>
    
    

    </section>


    <section className="text-center mb-8 p-8 bg-gray-200">
        <h5 className="text-2xl text-gray-400 font-bold mb-3">Start trading with Widget Scale</h5>

        <h5 className="text-3xl font-bold mb-5">Fast account opening in 3 simple steps</h5>
        
            <div className="md:flex md:justify-evenly">

     <div className="mb-8 leading-8">
        
     <div className="w-20 h-20 rounded-full mx-auto bg-blue-500 pt-5 text-white text-4xl">1</div>
     <p className="font-bold">Register</p>
      <p className="text-sm  text-gray-400 font-bold">Create an account today on our trading platform</p>


     </div>

     
     <div className="mb-8 leading-8">
     <div className="w-20 h-20 rounded-full mx-auto bg-blue-500 pt-5 text-white text-4xl">2</div>
     <p className="font-bold">Fund</p>
      <p className="text-sm  text-gray-400 font-bold">Fund your account using a wide range of funding methods</p>


     </div>

     
     <div className="mb-8 leading-8">
     <div className="w-20 h-20 rounded-full mx-auto bg-blue-500 pt-5 text-white text-4xl">3</div>
     <p className="font-bold">Trade</p>
      <p className="text-sm  text-gray-400 font-bold">Access 180+ instruments across all asset classes inside the platform</p>


     </div>
     </div>
        <div className="md:flex md:mb-10 md:mt-10">



      <div className="mx-auto md:relative md:top-4 ">
        <p className="flex text-3xl justify-center font-bold"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-10">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
7.12 ms</p>

        <p className="mt-5 mb-5 text-blue-600 text-sm font-semibold">AVERAGE ORDER EXECUTION SPEED</p>
         <hr />

      </div>

      <div className="mx-auto mt-5 ">
                <p className="flex text-3xl justify-center font-bold">
    
    12+</p>

                <p className="mt-5 mb-5 text-blue-600 text-sm font-semibold">INTEGRATED LIQUIDITY PROVIDERS</p>
                <hr />

      </div>
      

    
      <div className="mx-auto mt-5 ">
                <p className="flex text-3xl justify-center font-bold"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-10">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

    12,000</p>

                <p className="mt-5 mb-5 text-blue-600 text-sm font-semibold">EXECUTED ORDERS PER SECOND</p>
                <hr />

      </div>

      <div className="mx-auto mt-5 ">
                <p className="flex text-3xl justify-center font-bold"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-10">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

    $545 K</p>

                <p className="mt-5 mb-5 text-blue-600 text-sm font-semibold">EXECUTED ORDERS PER SECOND</p>
                <hr />

      </div>
      </div>


      <button onClick={()=>{navigate('/login')}} className="fit-content px-10  py-3 mb-2 rounded text-white bg-blue-600">Setup your trading account</button>
         <p className="text-gray-400">Registration takes only 40 seconds!</p>
      
    </section>




    {/* --------------------------------------------------------------------------------- */}

    <section className="mt-10 text-left px-5 py-10 mb-10 p-10">

        <h5 className="text-3xl text-stone-600 font-bold mb-8 md:text-center">Connect to global capital markets</h5>


            <p className=" font-semibold text-gray-500 md:text-center">Trade Binary Options with the best platform, on a wide selection of assets, with high payouts, lightning-fast order execution and get personal customer support around the clock, fast withdrawals and the expertise of industry leaders.</p>

    </section>
</>


  )
}