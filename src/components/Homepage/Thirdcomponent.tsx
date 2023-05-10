import {motion} from 'framer-motion'


export default function Thirdcomponent() {
  return (

<motion.div
initial={{opacity:0}}
animate= {{opacity:1}}
transition={{duration:3}}
className='mb-10'>
  

  <section className='md:flex md:justify-evenly'>

            <motion.section  whileHover={{x:8,scale:1.1}} className="mt-10 mb-2 border-gray-400 w-6/6 border-2 rounded h-96  p-10 text-left md:w-2/6 shadow-xl ">


                <div className="flex border-l-8 border-l-blue-500  mb-8">
                    
                    <div className="ml-5">

                    <h3 className="text-3xl font-bold">Economic</h3>
                    <div className="text-xl">Analysis</div>
                </div>

                </div>
                <p>Stay ahead of the markets with world-leading market analysis. Keep your trading costs down with competitive spreads, commissions and low margins.</p>

            </motion.section>



            <motion.section whileHover={{x:8,scale:1.1}} className="mt-10 mb-2 border-gray-400 w-6/6 border-2 h-96 w-6/6 rounded p-5 text-left md:w-2/6 md:shadow-xl">


                <div className="flex border-l-8 border-l-blue-500  mb-8">
                    
                    <div className="ml-5">

                    <h3 className="text-3xl font-bold">Technical</h3>
                    <div className="text-xl">Analysis</div>
                </div>

                </div>
       <p>Real-time and detailed data monitoring on trades, stocks and binary with clear graphical demonstration. Additional reference for users with pool data.</p>
            </motion.section>

            </section>


            <div className="md:flex md:justify-center ">

            <motion.section whileHover={{x:8,scale:1.1}} className="mt-10 mb-2 border-gray-400 w-6/6 border-2 rounded p-5 pt-9 text-left md:w-2/6 md:shadow-lg">

                <hr />

                <p className="mt-8">Real-time and detailed data monitoring on trades, stocks and binary with clear graphical demonstration. Additional reference for users with pool data.</p>
             

      
            </motion.section>
            </div>

</motion.div>
  )
}