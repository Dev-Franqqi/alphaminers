'use client'
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { Link } from "react-router-dom"
import { IoIosArrowDropright } from "react-icons/io";
export default function Intermediate(){
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

      <h1 className="text-center font-bold mb-7">Intermediate</h1> 

      <h2 className="text-4xl font-semibold mb-5">How to Develop a Trading Plan</h2> 
      <p className="mb-8">
        
Sometimes there is a misconception that you need highly evolved market knowledge and years of trading experience to be successful. However, we often see that the more information we have the more difficult it is to create a clear plan. More information tends to create hesitation and doubt, which in turn allows emotions to creep in. This can prevent you from taking a step back and looking at a situation subjectively.
      </p>

      <p className="mb-8">
        
If you don&aspos;t know where you are going, any road will get you there. In trading, if you don&aspos;t set out a plan for your trades and develop strategies to follow you have no way to measure your success. The vast majority of people do not trade to a plan, so it&aspos;s not a mystery why they lose money. Trading with a plan is comparable to building a business. We are never going to be able to beat the market. In general it&aspos;s not about winning or losing, it&aspos;s about being profitable overall.
      </p>
        

        <h2 className="mb-3 mt-3 text-2xl font-semibold">Why a trading plan is important</h2>


        <p className="mb-8">
        When trading, as in most endeavors, it&aspos;s important to start at the end and work backwards to create your plan and figure out what type of trader you should be. The most successful traders trade to a plan, and may even have several plans that work together. Always write things down. Why? Because it will help you stay focused on your trading objectives, and the less judgment we have to use the better. A plan helps you maintain discipline as a trader. It should help you trade consistently, manage your emotions, and even help to improve your trading strategy. It is also important to use your plan. Many people make the mistake of spending all their time creating a plan, then never implementing it.
        </p>

        <h2 className="mb-3 mt-3 text-2xl font-semibold">
        How to build a trading plan

        </h2>

        <p className="mb-8">
        Make sure you do your own research and build a plan according to your needs. Find confidence in what you know. The tools you have selected for your strategy are key, from the type of chart to the specific drawing tools to even the most elaborate of strategies. Test your plan in the beginning to make sure you are on the right track. After you have begun trading, continue testing it regularly. This allows you to measure your success by clearly seeing what works and what does not work. From there you can tweak elements that might be weaker and not contributing to your overall goal. Ask yourself the following questions (The answers to these will assist you in the foundation for your trading plan and should be referred back to regularly to insure that you are on track with your plan).
        </p>

        <h2 className="mb-3 mt-3 text-2xl font-semibold">
Why am I trading?</h2>
<p className="mb-8">If your immediate answer is, “to make money” you should stop right there. If the only goal is to make as much money as fast as we can, we are ultimately doomed, because it will never be enough. Managing your losses should be your primary goal. This will create an environment in which profits can be generated.</p>

<h2 className="mb-3 mt-3 text-2xl font-semibold">What is your motivation?</h2>
<p className="mb-8">Look at things in percentages; remember leverage is a double-edged sword. That is why risk and money management are key.
Deciding what type of trader you are can be tough; especially since the trader you want to be can be very different from the type of trader you should be based on your behaviors and characteristics. Once you have laid out your goals, risk appetite, strengths, and weaknesses it should become apparent which type of trading fits you best. You will notice three columns in the chart; they are labeled short, base and long. Base equals the timeframe charts you spend the majority of your time, if you are not sure, this is the timeframe chart that you keep going back to. Short and long are the timeframe charts that you refer to confirming or denying what is happening in the base timeframe chart. A common mistake traders make is jumping around randomly between chart timeframes.</p>

<h2 className="mb-3 mt-3 text-2xl font-semibold">
How to match your goals to a trading style
</h2>
<p className="mb-8">Once you decide what type of trader you are, you should begin to invest yourself into education and research. Make continual learning a priority, each person&aspos;s strategy or methodology is unique and cannot be duplicated. Therefore your plan is most successful when it is based on your individual needs. Evaluate your needs and the effort required. Make sure you understand why you are placing trades. An initial investment maybe monetary but will benefit you over the long-term. Time and research should be continuing investments. Research by way of following current global events and keeping up to date on current analysis tools will help educate you further on all aspects of trading. Ask yourself, “Am I a fundamental or technical trader?”</p>
    <p className="mb-8">
Creating a strategy using fundamental and technical tools is key, but we first need to learn a little about each of these types. Some traders choose to use fundamental analysis to assist with their trading decisions. This type of analysis is based on the news. News can be considered anything ranging from economic, political, or even environmental events. As a result, fundamental analysis is much more subjective.</p>
    
    <p className="mb-8">Other traders may choose to use technical analysis to drive their trading decisions. This type of analysis is more definitive and relies more on the math and probabilities behind trading. The specific type of analysis used can be an indicator. They could be either leading or lagging. There are very few leading indicators available, which may give an idea of where the market is going to go. Fibonacci is the most popular, but most misused and misunderstood.</p>


    <p className="mb-8">
After determining some of the types of analysis you will use, it&aspos;s time to develop a trading strategy. This can be through fundamental analysis, technical analysis, or a combination of both. It is key that you develop a strategy and include it as a part of your trading plan.</p>

<p className="mb-8">A strategy is a step-by-step systematic approach to how and when we are going to use tools developing a sequence of analysis.</p>

<p className="mb-8">let&aspos;s take a look at the money and risk management side of trading:
Talking about money and risk management can be a difficult step for many people. Trying to determine what your risk tolerance is can be even harder. Ask yourself, “How much money do I really have to trade with?” Be honest with what is truly available to you. One mistake that people make is thinking that trading is an investing or holding activity, and keep depositing money. Trading is not a deposit and hold activity. Liquidation can and does happen when 100% of the total margin requirement of all open positions is no longer met. Those who make money may not have more winning trades than losing; they may just manage their losing trades so the winning ones make them profitable overall. It can be easier to win fewer times and still be profitable. A common characteristic of new traders is to quickly take profits but let losing trades run, consequently they have to maintain a higher risk to reward ratio.</p>

<p className="mb-8">Let&aspos;s think in terms of probability. It is helpful to use the 3% rule and always have a cushion. This is an example of the 3% rule in action: 3% on a $10,000 account is equal to $300 risk per trade. Then divide the cost of risk by the account equity, to get the number of losing trades or $10,000/$300 or 33.3 trades. These answers will help you determine if you can meet your goals. It allows you to give yourself room for flexibility. Traders limit their trading and the plan if there is not enough room for the losses. When developing your trading plan and approach it&aspos;s important to take other costs into consideration, some may have more of an impact than others, but all contribute to your investment in a trading plan. Assuming we have the right strategy decided and how much equity to risk, let&aspos;s figure out timing.</p>
<p className="mb-8">
Timing when trading can be everything. When do the markets open? When do they close? What instruments (like currency pairs) am I trading? Some markets are open when others are closed or they may overlap. Here are the open and close times for some of the major markets. More volatility occurs at market opening and closings but also when reports or news are released. The beauty of trading some instruments is the ability to trade them even if the market you physically reside in is closed. Picking your times to trade or watch the market maybe easier since there is likely a market open somewhere in the world.
</p>




    </main>

        
        
        <div className="flex justify-end pb-3 mt-6">

        
        <Link className="text-[#8670FC] flex font-semibold text-right" to="/education/advanced">Advanced <IoIosArrowDropright className="text-2xl ml-2" /></Link>
        </div>
        </div>

        </>
    )
}