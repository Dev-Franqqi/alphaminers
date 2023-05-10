import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
type Props = {}

export default function Signup({}: Props) {
  return (
    <div className='w-full h-screen flex justify-between overflow-hidden font-sans px-10'>
        <div className='hidden md:block px-5 h-full'>

<motion.h1 initial={{y:-250}} animate={{y:10}} className="hidden md:block text-2xl font-bold"><Link to='/'>ALPHA MINERS</Link></motion.h1>

<motion.p initial={{opacity:0}}animate={{opacity:1}} className="hidden mt-2 text-sm md:block">...Scale to new heights</motion.p>


        </div>
        <div className='p-10 mt-10 w-full md:w-2/5 md:bg-white md:h-5/5 md:rounded-lg md:shadow-lg md:my-auto'>
            <h2 className='text-3xl font-bold text-center mt-10 mb-10'>SIGNUP</h2>

            <form className='flex flex-col h-3/5 '>
                <input type='email' className='border-2 w-4/5 h-10 p-1 rounded mx-auto mb-2' placeholder='Email' required/>
                <input type='password' className='border-2 w-4/5 h-10 p-1 rounded mx-auto mb-4' placeholder='Password' required/>
                <button type='submit' className='w-4/5 h-10 bg-blue-800 mx-auto text-center py-1 shadow-lg rounded text-white'>Submit</button>

            </form>
            <p className="mb-10 text-center mt-5 text-gray-500">Have an account? <Link className="underline ml-2" to='/login'>Log in</Link></p>




            <hr className="mt-5"/>
            <footer className="text-center mt-1"><Link to='/'>ALPHA MINERS</Link></footer>


        </div>
    
    </div>
  )
}