import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

type Com ={
    children: ReactNode,className:String

}

function Section({ children }:Com) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }

export default function Fourthsection() {
    const {t}= useTranslation()
    return (
      
  <>
      <Section className="p-8">
      <h5 id='market' className='text-3xl  font-bold text-center'>{t('AccountTypes.heading')}</h5>
  
  
          <div className="md:flex w-full  ">
      {/* <img src={raisingHand} className='hidden md:flex' alt="" width={400} /> */}
              
  
      <div className="my-10 md:w-2/6 py-3 shadow-md md:flex md:flex-col gap-5 border rounded-lg text-center">
  
      <h5 className="font-bold pl-5 my-5 ">{t('AccountTypes.starter.title')}</h5>
              <h2 className="text-4xl font-bold">{t('AccountTypes.starter.price')} </h2>
          <ul className="text-sm leading-10 md:leading-10">
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.starter.features.0')}
              </li>
              
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.starter.features.1')}</li>
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.starter.features.2')}</li>
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.starter.features.3')}
                  
              </li>
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.starter.features.4')}</li>
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.starter.features.4')}</li>
          </ul>
          <Link to='/signup' className='bg-sky-600 w-2/5 mx-auto text-white rounded px-4 py-2' >{t('AccountTypes.starter.button')}</Link>
      </div>
  
      <div className="my-10 border text-center shadow-md rounded-lg h-fit py-3 md:w-2/6 md:mx-4">
  
  <h5 className="font-bold my-5 ">{t('AccountTypes.basic.title')}</h5>
  <h2 className="font-bold text-4xl my-7">{t('AccountTypes.basic.price')}</h2>
      <ul className="leading-10 text-sm md:leading-10 ">
          <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.basic.features.0')}
          </li>
          <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.basic.features.1')}</li>
          <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.basic.features.2')}</li>
          <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.basic.features.3')}
              
          </li>
          <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.basic.features.4')}</li>
          <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.basic.features.5')}</li>
      </ul>
      <Link to='/signup'  className='bg-sky-600 text-white rounded py-2 relative md:top-4 md:mb-6 w-2/5 px-4' >{t('AccountTypes.basic.button')}</Link>
  
      
  </div>
  
  
  
      <div className="my-10  md:w-2/6 shadow-md md:mx-4 py-3 rounded-lg border text-center">
  
      <h5 className=" text-lg  font-bold pl-5 my-5 ">{t('AccountTypes.premium.title')}</h5>
      <h2 className="text-4xl my-7 font-bold">{t('AccountTypes.premium.price')}</h2>
          <ul className="leading-9 text-sm   md:leading-10">
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.premium.features.0')} 
              </li>
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.premium.features.1')}</li>
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.premium.features.2')}</li>
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.premium.features.3')}
                  
              </li>
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.premium.features.4')}</li>
              <li><span className='text-blue-500 mr-1'>✓</span>{t('AccountTypes.premium.features.5')}</li>
          </ul>
          <Link to='/signup' className='bg-sky-600 text-white rounded py-2 relative md:top-4 md:mb-6 w-2/5 px-4' >{t('AccountTypes.premium.button')}</Link>
                   -
      </div>
      </div>
      
      
  
  
  
      
      
  
      </Section>
  
  
      <section className="text-center text-black mb-10 p-8 bg-gray-200">
          <h5 className="text-2xl text-black font-bold mb-3">{t('StartTrading.heading')}</h5>
  
          <h5 className="mt-2 font-bold mb-5">{t('StartTrading.subheading')}</h5>
          
              <div className="md:flex md:justify-evenly">
  
       <div className="mb-8 md:w-1/6 leading-8">
          
       <div className="w-20 h-20 rounded-full mx-auto bg-blue-500 pt-5 text-white text-4xl">{t('StartTrading.steps.0.number')}</div>
       <p className="font-bold">{t('StartTrading.steps.0.title')}</p>
        <p className="text-sm  text-gray-500 font-bold">{t('StartTrading.steps.0.description')}</p>
  
  
       </div>
  
       
       <div className="mb-8 md:w-1/6 leading-8">
       <div className="w-20 h-20 rounded-full mx-auto bg-blue-500 pt-5 text-white text-4xl">{t('StartTrading.steps.1.number')}</div>
       <p className="font-bold">{t('StartTrading.steps.1.title')}</p>
        <p className="text-sm  text-gray-500 font-bold">{t('StartTrading.steps.1.description')}</p>
  
  
       </div>
  
       
       <div className="mb-8 md:w-1/6 leading-8">
       <div className="w-20 h-20 rounded-full mx-auto bg-blue-500 pt-5 text-white text-4xl">{t('StartTrading.steps.2.number')}</div>
       <p className="font-bold">{t('StartTrading.steps.2.title')}</p>
        <p className="text-sm  text-gray-500 font-bold">{t('StartTrading.steps.2.description')}</p>
  
  
       </div>
       </div>
          <div className="md:flex w-full md:mb-10 md:mt-10">
  
  
  
        <div className="mx-auto  md:w-1/6 md:relative md:top-6 ">
          <p className="flex text-3xl justify-center font-bold"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
  {t('StartTrading.executionSpeed.value')}</p>
  
          <p className="mt-5 mb-5 text-blue-600 text-sm font-semibold">{t('StartTrading.executionSpeed.label')}</p>
           <hr />
  
        </div>
  
        <div className="mx-auto md:1/6 mt-5 ">
                  <p className="flex text-3xl justify-center font-bold">
      
                  {t('StartTrading.liquidityProviders.value')}</p>
  
                  <p className="mt-5 mb-5 text-blue-600 text-sm font-semibold">{t('StartTrading.liquidityProviders.label')}</p>
                  <hr />
  
        </div>
        
  
      
        <div className="mx-auto md:1/6 mt-5 ">
                  <p className="flex text-3xl justify-center font-bold"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
  
     {t('StartTrading.ordersPerSecond.value')}</p>
  
                  <p className="mt-5 mb-5 text-blue-600 text-sm font-semibold"> {t('StartTrading.ordersPerSecond.label')}</p>
                  <hr />
  
        </div>
  
        <div className="mx-auto md:1/6 mt-5 ">
                  <p className="flex text-3xl justify-center font-bold"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
  
      $545 K</p>
  
                  <p className="mt-5 mb-5 text-blue-600 text-sm font-semibold">{t('StartTrading.ordersPerSecond.label')}</p>
                  <hr />
  
        </div>
        </div>
  
  
        <a href='/login' className="fit-content px-10  py-3 rounded text-white bg-blue-600">{t('StartTrading.setup.button')}</a>
           <p className="text-gray-400 mt-2">{t('StartTrading.setup.text')}!</p>
        
      </section>
  
  
  
      {/* --------------------------------------------------------------------------------- */}
  
      <section className="mt-10 text-white text-left px-5 py-10 mb-10 p-10">
  
          <h5 className="text-3xl font-bold mb-8 md:text-center">{t('StartTrading.finSect.heading')}</h5>
  
  
              <p className=" font-semibold  md:text-center">{t('StartTrading.finSect.par')}</p>
  
      </section>
  </>
  
  
    )
  }