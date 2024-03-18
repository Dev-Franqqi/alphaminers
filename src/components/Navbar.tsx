import { Button } from "./ui/button"
import Logo from "../assets/Logo.svg"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import useDarkContext from "./useDarkContext"

export default function Navbar(){
  const navigate = useNavigate()
  const {dark,setDark} = useDarkContext()
 
    const toggleDarkMode = ()=>{
      const newDark = !dark

        setDark(newDark);
        Cookies.set("darkMode", `${newDark}`);
        console.log(newDark)
      
      }
    return (
        <>
        <nav className="flex justify-between md:px-5 p-2">


            <header className="flex gap-x-1">
                <img src={Logo} alt=""/>
                <p className="mt-5 font-bold text-sm md:text-base text-[#3333FF]">CRYPTNETVERSE</p>
            </header>
            <ul className="md:flex hidden mt-3 w-2/4 md:gap-x-5">
                <li><Link to='#'>About</Link></li>
                <li><Link to='#'>Pricing</Link></li>
                <li><Link to='#'>Contact us</Link></li>
            </ul>
            <div className="flex gap-x-1 mt-2">


        <Button onClick={()=>navigate('/login')} className="font-semibold bg-black text-white rounded-md hover:text-[#3333FF]">Log in</Button>
        <Button onClick={()=>navigate('/signup')} className="font-semibold border rounded-md border-black hover:bg-[#3333FF] hover:text-white hover:border-0 hidden md:block">Sign up</Button>
        {!dark ? (
  <svg onClick={toggleDarkMode} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2 hover:text-[#3333FF]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
) : (
  <svg onClick={toggleDarkMode} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2 hover:text-[#3333FF]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
)}
            </div>




        </nav>
        
        
        </>
    )
}