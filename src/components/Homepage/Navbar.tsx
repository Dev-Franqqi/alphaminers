import { useState} from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {

    const [menu,setMenu] = useState(false)


    return ( 
                <>

                 <nav className="flex justify-between py-1 px-3 shadow-lg bg-violet-200 sticky top-0">

                <header className="text-2xl my-auto font-extrabold"><NavLink to='/'>ALPHA MINERS</NavLink></header>


        <div className="hidden gap-6 md:flex md:justify-between w-2/5 ">


        <ul className="flex font-bold justify-between p-4 w-3/5">
                    <li className="cursor-pointer">Home</li>
                    <li><a href="#market">Market</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
        <div className="w-48 h-4/5 px-7 my-auto  py-3 border-2 rounded border-blue-500 flex justify-between font-bold text-blue-500">

            
                    <NavLink to='/login'>LOGIN</NavLink>
                    <span className=" text-xl relative -top-1 text-blue-500">|
                        
                    
                        </span>
                    <NavLink to='/signup'>SIGNUP</NavLink>

                    </div>
        </div>


        
      
        {!menu &&       <svg onClick={(e)=>setMenu(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9 md:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                </svg>           
            }


        {menu && <svg onClick={(e)=>setMenu(false)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            }
  
            
        </nav>
        {menu &&   <div className="leading-10 text-center backdrop-blur sticky top-16 text-black text-2xl font-bold w-screen h-screen pt-8">
             <ul className="">
                <li className="my-5">Home</li>
                <li className="my-5"><a href="#about">About</a></li>
                <li className="my-5"><a href="#market">Market</a></li>
                {/* <li className="my-5">Commodities</li> */}
                {/* <li className="my-5">Indices</li> */}
            </ul>


        <NavLink to='/login'>Login</NavLink>                    
         </div>  }
      
        
        </> 
            
    
       
     );
}
 
export default Navbar;