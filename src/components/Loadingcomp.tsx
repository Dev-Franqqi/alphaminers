import Logo from "../assets/Logo.svg"
import Cookies from "js-cookie"
import { useState,useEffect } from "react"
export default function Loadingcomp(){
    const [darkMode,setdarkMode] = useState(false)

    useEffect(()=>{
        console.log(darkMode)

    const dark = Cookies.get('dark');
    if(dark){
      if(dark==='true'){
        setdarkMode(true)
      }
    }
    else{
      setdarkMode(false)
    }},[])

    return(<main className={'h-screen'}>

        <img src={Logo} alt="logo" className="animate-bounce mx-auto mt-[50%] "/>
       
    </main>

    )
}