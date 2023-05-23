import Scalable from '../assets/scalable.png'
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import { auth } from '../components/firebase';
import {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'js-cookie'

export default function Login() {
  const navigate= useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error ,setError] = useState(false)
  const [errmessage, setErrmessage] = useState('')

  // const [error,setError] = useState(false)
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(email !== '' && password !==''){
      signInWithEmailAndPassword(auth,email,password)
      .then((cred)=>{
        navigate('/dashboard')
        Cookies.set("User",JSON.stringify(cred.user),{ sameSite: 'Lax', expires:2 })
        setEmail('');
        setPassword('')

      })
      .catch((error)=>{
        setError(true)
        setErrmessage(error.message)
       

      })


    }
  }
 // check for cookies
  useEffect(()=>{
    if(Cookies.get("User")){
        navigate('/dashboard');
    }
})

  return (
    <div className='w-full h-screen flex overflow-hidden font-sans px-10'>
        <div className='hidden md:block px-5 text-white h-full'>

<motion.h1 initial={{y:-250}} animate={{y:10}} className="hidden md:block text-2xl font-bold"><Link to='/'>Alpha Crypto Miners</Link></motion.h1>

<motion.p initial={{opacity:0}}animate={{opacity:1}} className="hidden mt-2 text-sm md:block">...Scale to new heights</motion.p>
<img src={Scalable} alt="" />

        </div>
        <div className='py-10 px-1 md:px-5 mt-10 w-full md:w-3/5 md:bg-white md:h-5/5 md:rounded-lg md:shadow-lg md:my-auto'>
            <h2 className='text-3xl font-bold text-white md:text-black text-center mt-10 mb-10'>LOGIN</h2>

            <form onSubmit={handleSubmit} className='flex flex-col w-full md:h-3/5 '>


              {error &&  <div className='border-3 border-red-600 bg-white text-red-600 px-2 py-2 rounded-md mb-2 w-fit'>{errmessage}</div>}

             
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='border-2 w-full h-10 p-1 rounded mx-auto mb-2' placeholder='Email' required/>
                <input type='password'value={password}onChange={(e)=>setPassword(e.target.value)} className='border-2 w-full h-10 p-1 rounded mx-auto mb-4' placeholder='Password' required/>
                <button type='submit' className='w-4/5 h-10 bg-blue-800 mx-auto text-center py-1 shadow-lg rounded text-white'>Submit</button>

            </form>
            <p className="mb-2 text-center mt-5 text-gray-500">don't have an account? <Link className="underline ml-2" to='/signup'>Sign up</Link></p>

            <p className='mb-10 text-center'><a href="https://me.whatsapp/+12366023869">Contact us if you have any issue</a></p>



            <hr className="mt-5"/>
            <footer className="text-center text-white md:text-black mt-1"><Link to='/'>Alpha Crypto Miners</Link></footer>


        </div>
    
    </div>

  )
}