import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { colref } from '../components/firebase';
import { auth } from '../components/firebase';
import { useNavigate } from "react-router-dom";
import chartImage from "../assets/chartImage.png"


export default function Signup() {
    const navigate = useNavigate();


    const [firstname,setFirstName]  =useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   



    
    const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    
        createUserWithEmailAndPassword(auth,email,password)
        .then((cred)=>{
        
           
          
          
    
            addDoc(colref,{
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password,
                amount: 0,
                uid:cred.user.uid
            }).then(()=>{
                setEmail("");
                setPassword("");
                
            })
    
            
    
            return navigate("/dashboard");
    
    
    
    
    
        })
    
        .catch(err=>{console.log(err);})
    
     
      
            
    }
    
  return (
    <div className='w-full h-screen flex justify-between overflow-hidden font-sans px-10'>
        <div className='hidden w-3/5 text-white md:block px-5 h-full'>

<motion.h1 initial={{y:-250}} animate={{y:10}} className="hidden md:block text-2xl font-bold"><Link to='/'>ALPHA CRYPTO MINERS</Link></motion.h1>

<motion.p initial={{opacity:0}}animate={{opacity:1}} className="hidden mt-2 text-sm md:block">...Scale to new heights</motion.p>
    <img src={chartImage} alt="" />

        </div>
        <div className='py-10 px-1 md:px-5 mt-10 w-full md:w-2/5 md:bg-white md:h-5/5 md:rounded-lg md:shadow-lg md:my-auto'>
            <h2 className='text-3xl text-white font-bold md:text-black text-center mt-10 mb-10'>SIGNUP</h2>

            <form onSubmit={handleSubmit} className='flex flex-col h-3/5 '>
       

                <div className='flex justify-between w-full'>
                <input type='text' onChange={(e)=>{setFirstName(e.target.value)}} className='border-2 w-3/6  h-10 p-1 rounded mr-2 mb-2' placeholder='Firstname' required/>
                <input type='text' onChange={(e)=>{setLastname(e.target.value)}} className='border-2 w-3/6 h-10 p-1 rounded mx-auto mb-2' placeholder='Lastname' required/>
                </div>

                <input type='email'onChange={(e)=>{setEmail(e.target.value)}} className='border-2 w-full h-10 p-1 rounded mx-auto mb-2' placeholder='Email' required/>
                <input type='password' onChange={(e)=>{setPassword(e.target.value)}} className='border-2 w-full h-10 p-1 rounded mx-auto mb-2' placeholder='Password' required/>
                <button type='submit' className='w-4/5 h-10 bg-blue-800 mx-auto text-center py-1 shadow-lg rounded text-white'>Submit</button>

            </form>
            <p className="mb-10 text-center mt-5 text-gray-500">Have an account? <Link className="underline ml-2" to='/login'>Log in</Link></p>




            <hr className="mt-5"/>
            <footer className="text-center text-white md:text-black mt-1"><Link to='/'>ALPHA CRYPTO MINERS</Link></footer>


        </div>
    
    </div>
  )
}