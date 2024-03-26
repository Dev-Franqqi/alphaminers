import { Button } from "./ui/button"
import Logo from "../assets/Logo.svg"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import useOpencontext from "./hooks/useOpencontext"
import useDarkContext from "./useDarkContext"
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
export default function Navbar(){
  const navigate = useNavigate()
  const {dark,setDark} = useDarkContext()
  const {isOpen,setIsOpen} = useOpencontext()
 
    const toggleDarkMode = ()=>{
      const newDark = !dark

        setDark(newDark);
        Cookies.set("darkMode", `${newDark}`);
        console.log(newDark)
      
      }
      const toggleMenu = () => {
        setIsOpen((prevIsOpen:boolean) => !prevIsOpen);
      };
      
    const mobileNavVariants = {
      initial:{
          opacity:0,
          left:"-100%"
      },
      animate:{
          opacity:1,
          left:0
      }

  }
  const mobileNavCloseVariants = {
      initial: {
        opacity: 1,
        left: 0,
      },
      animate: {
        opacity: 0,
        left: '-100%',
      },
    };
    
    return (
        <>
        <nav className="flex justify-between md:px-5 p-2">
        <div className="flex gap-x-3 w-2/3 md:1/3 mt-3 ">
        <div className="z-[70]">
            
            <motion.div
              className="menu-icon"
              onClick={toggleMenu}
              initial={{ opacity: 1, rotate: 0 }}
              animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {isOpen ? <IoClose size={30} className="md:hidden mt-1  text-3xl text-black dark:text-white" /> : <HiOutlineMenuAlt4 className="md:hidden mt-1  text-3xl text-black dark:text-white" size={30} />}
            </motion.div>
            {isOpen && (
              <motion.div
                className="close-icon absolute top-5"
                onClick={toggleMenu}
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <IoClose className="md:hidden mt-1  text-3xl text-black dark:text-white" size={30} />
              </motion.div>
            )}
          </div>

            <header className="flex gap-x-1">
                <img src={Logo} alt=""/>
                <p className="mt-2 font-bold text-sm md:text-base text-[#3333FF]">CRYPTNETVERSE</p>
            </header>
            </div>
            <ul className="md:flex hidden mt-3 pt-3 w-2/4 md:gap-x-5 ">
            <li className="hover:underline">
                    <Link to="/about">About</Link>
                </li>
                <li className="hover:underline">
                    <Link to="/education">Education</Link>
                </li>
                <li className="hover:underline ">
                <Link to="/">Pricing</Link>

                </li>
                    <li className="hover:underline ">
                    <Link to="/">Contact</Link>


                    </li>
            </ul>
            <div className="flex gap-x-1 mt-2">


        <Button onClick={()=>navigate('/login')} className="font-semibold bg-black text-white rounded-md hover:text-[#3333FF] md:mt-2">Log in</Button>
        <Button onClick={()=>navigate('/signup')} className="font-semibold border rounded-md border-black hover:bg-[#3333FF] hover:text-white hover:border-0 hidden md:block md:mt-2">Sign up</Button>
        {!dark ? (
  <svg onClick={toggleDarkMode} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4 md:ml-1 hover:text-[#3333FF]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
) : (
  <svg onClick={toggleDarkMode} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4 md:ml-1 hover:text-[#3333FF]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
)}
            </div>




        </nav>
        {isOpen ? (
  <motion.aside
    initial='initial'
    animate='animate'
    variants={mobileNavVariants}
    className="w-[80%] h-[90vh] overflow-hidden md:hidden absolute border bg-white dark:bg-[#322965] dark:border-0 z-[60]"
  >
    <ul className="text-xl pt-10 pl-6 flex flex-col space-y-10" >
        <li className="hover:text-underline hover:text-[#3333FF]"><Link to="/about">About</Link></li>
        <li className="hover:text-underline hover:text-[#3333FF]"><Link to={'/education'}>Education</Link></li>
        <li className="hover:text-underline hover:text-[#3333FF]"><Link to='#pricing'>Pricing</Link></li>
        <li className="hover:text-underline hover:text-[#3333FF]"><Link to="/login">View Dashboard</Link></li>
    </ul>
   
    <div className="relative">

    </div>
    <div className="absolute bottom-20 px-6  text-white" >
    <div className="flex justify-between gap-x-3 border-black">

        <Button onClick={()=>navigate('/signup')} className="bg-black dark:bg-white dark:text-black text-semibold text-white">Signup</Button>
        <Link to={'#pricing'} className="bg-[#3333FF] rounded-md pt-2 text-sm px-2 font-medium text-white text-semibold">View Pricing</Link>
    </div>
    </div>
    
  </motion.aside>
) : (
  <motion.aside
    initial='initial'
    animate='animate'
    variants={mobileNavCloseVariants}
    className="w-[80%] hidden h-[90vh] md:hidden overflow-hidden absolute border bg-white dark:bg-[#322965] dark:border-0 z-[60]"
  >
     <ul className="text-xl pt-10 pl-6 flex flex-col space-y-10" >
        <li className="hover:text-underline hover:text-[#3333FF]">About</li>
        <li className="hover:text-underline hover:text-[#3333FF]">Education</li>
        <li className="hover:text-underline hover:text-[#3333FF]">Pricing</li>
        <li className="hover:text-underline hover:text-[#3333FF]">View Dashboard</li>
    </ul>
    

    <div className="absolute bottom-20 px-6 " >
      <div className="flex justify-between">

        <Button className="bg-black w-3/6 dark:bg-white dark:text-black text-semibold text-white">Signup</Button>
        <Button className="bg-[#3333FF] w-3/6 text-white text-semibold ">View Pricing</Button>
    </div>
    </div>

  

    
  </motion.aside>
)}

        
        
        </>
    )
}