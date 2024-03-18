import Scalable from '../assets/scalable.png'
import Input from '@mui/joy/Input';
import useDarkContext from '@/components/useDarkContext';
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import { auth } from '../components/firebase';
import {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';

export default function Login() {
  const {t} = useTranslation()
  const navigate= useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error ,setError] = useState(false)
  const [errmessage, setErrmessage] = useState('')
  const [loading,setLoading] = useState(false)
  const {dark,setDark} = useDarkContext()
  const toggleDarkMode = ()=>{
    const newDark = !dark

      setDark(newDark);
      Cookies.set("darkMode", `${newDark}`);
      console.log(newDark)
    
    }
  const gotoHome =()=>{
    navigate("/")
  }
  // const [error,setError] = useState(false)
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setErrmessage('')
    setLoading(true)
    if(email !== '' && password !==''){
      signInWithEmailAndPassword(auth,email,password)
      .then((cred)=>{
        navigate('/dashboard')
        Cookies.set("User",JSON.stringify(cred.user),{ sameSite: 'Lax', expires:2 })
        setEmail('');
        setPassword('')
        setLoading(false)

      })
      .catch((error)=>{
        setError(true)
        setErrmessage(error.message)
        setLoading(false)
       

      })


    }
  }
 // check for cookies
  useEffect(()=>{
    if(Cookies.get("User")){
        navigate('/dashboard');
        
    }
    console.log(dark)
},[])

  return (
    <div className={dark?'dark bg-black w-full h-screen md:flex overflow-hidden font-sans px-10':'w-full h-screen md:flex overflow-hidden font-sans px-10'}>
      <nav className="flex md:flex-col md:py-3 justify-between pt-2">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={gotoHome} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
       
{!dark &&  <svg
    onClick={toggleDarkMode}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mt-1 md:text-black  hover:text-[#8670FC]"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    />
</svg>}
{dark && <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleDarkMode} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
}

        </nav>
      <div className="hidden md:block px-5 dark:bg-black text-white h-full">
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: 10 }}
          className="hidden md:block text-2xl font-bold text-black dark:text-white"
        >
          <Link to="/">Cryptonetverse</Link>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden mt-2 text-sm md:block text-black dark:text-white"
        >
          ...{t("Login.scale")}
        </motion.p>
        <img src={Scalable} alt="" />
      </div>
      <div className="py-10 dark:bg-black px-1 md:px-5 mt-10 w-full md:w-3/5  md:h-5/5 md:rounded-lg md:shadow-lg md:my-auto">
        <h2 className="text-3xl font-bold dark:text-white  md:text-black text-center mt-10 mb-10">
          {t("login").toUpperCase()}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:h-3/5 "
        >
          {error && (
            <div className="border-3 border-red-600 bg-white text-red-600 px-2 py-2 rounded-md mb-2 w-fit">
              {errmessage}
            </div>
          )}

          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 w-full h-10 p-1 rounded mx-auto mb-2"
            placeholder="Email"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 w-full h-10 p-1 rounded mx-auto mb-4"
            placeholder="password"
            required
          />
          <button disabled={loading}
            type="submit"
            className="w-4/5 h-10 bg-blue-800 mx-auto text-center py-1 shadow-lg rounded text-white"
          >
            Submit
          </button>
        </form>
        <p className="mb-2 text-center mt-5 text-gray-500">
          don't have an account?{" "}
          <Link className="underline text-blue-500 ml-2"  to="/signup">
            {t("signup")}
          </Link>
        </p>

        {/* <p className="mb-10 text-center underline` text-gray-500">
          <a href="https://wa.me/+16072257704">{t("Login.contact")}</a>
        </p> */}

        <hr className="mt-5" />
        <footer className="text-center  md:text-black mt-1">
          <Link to="/">Cryptonetverse</Link>
        </footer>
      </div>
    </div>
  );
}