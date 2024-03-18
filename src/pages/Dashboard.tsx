
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import { query, where } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../components/firebase";

import Loadingcomp from "@/components/Loadingcomp";
import { Button } from "@/components/ui/button"
import { SlGraph } from "react-icons/sl";
import { IoWalletOutline } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaGear } from "react-icons/fa6";
import Logo from '../assets/Logo.svg'

export interface Person{
  email:string;
  amount:number;
  firstname:string;
  lastname:string;
  totaldeposits:number;
  currentprofits:number;
  uid:string;
  password:string;
  country:string;
  phone:string;
}

export type B ={
  uid: string,
 email: string,
emailVerified: boolean,
isAnonymous: boolean,
providerData: Array<object>,
// 0:,
providerId: string,

displayName: string | null,

phoneNumber: string | null,
// ...
apiKey: string,
appName: string,
createdAt: string,
lastLoginAt: string,
stsTokenManager:{
accessToken: string,
expirationTime: string,
refreshToken: string,
}
}


export default function Dashboard() {
  const navigate= useNavigate();
  const [loading,setLoading] = useState(true)
  const [darkMode,setdarkMode] = useState(false)
  const [user,setUser] = useState<Person>()
  const setToDarkMode = ()=>{
      setdarkMode(true);
      Cookies.set('dark','true')
  }
  const setLightMode = ()=>{
      setdarkMode(false);
      Cookies.set('dark','false')
  }

  const gotoHome = ()=>{
      navigate('/')
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

      const userCookie = Cookies.get('User');
      if(userCookie){
          const cookieValue:B  = JSON.parse(userCookie)
          const q = query(
              collection(db,"UserInfo"),
              where("uid","==",`${cookieValue.uid}`)
          )
          if(!loading ){
              return
          }
          else{
              
              getDocs(q).then(snapshot=>{
                  setUser(snapshot.docs[0].data() as Person)
                  getDocs(q).then(snapshot=>{
                      setUser(snapshot.docs[0].data() as Person)
                          
                      console.log(user)
                  })
              })
          }
          }
          
          
      
      else{
          navigate('/login')
      }

      if(user){
      setLoading(false)
      }
  
  },[user,loading])

  return (
    <>

        {loading?<Loadingcomp />:

<div className={darkMode?'dark bg-[#0d0f29] h-fit text-white':'text-neutral-800'}>
<nav className="pt-3 px-2 flex justify-between">


        <svg xmlns="http://www.w3.org/2000/svg" onClick={gotoHome} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>


<img src={Logo} alt="" />

 {!darkMode &&  <svg
onClick={setToDarkMode}
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-6 h-6 mt-1 "
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
/>
</svg>}
{darkMode && <svg xmlns="http://www.w3.org/2000/svg" onClick={setLightMode} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 text-white">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
}
</nav>
<main className=" mt-4 p-4 flex flex-col space-y-4">

    <div className=" border flex justify-between h-[5rem] dark:border-gray-600 shadow-md rounded-md p-3">

        <div>

        <p className="font-semibold text-base">WELCOME {`${user?.firstname.toUpperCase()} ${user?.lastname.toUpperCase()}`}</p>
        <p className="font-medium text-xs">Personal Account</p>
        </div>
        <FaGear onClick={()=>navigate('/dashboard/settings')} className="text-2xl"/>

    </div>

    <div className="border dark:border-gray-600 h-[10rem] shadow-md p-4 rounded-md">
        <div className="flex gap-x-2 mb-2">
        <SlGraph className="text-4xl" />
        <p className="font-bold pt-1">Total Deposit</p>
        </div>
        <p className="text-2xl font-bold mb-3">{`${user?.totaldeposits}.00`}</p>
        <Button onClick={()=>navigate('/dashboard/deposit')} className="bg-[#8670FC]  focus:bg-blue-600 font-semibold text-white">Deposit</Button>
    </div>
    <div className="border dark:border-gray-600  h-[10rem] shadow-md p-4 rounded-md">
        <div className="flex gap-x-2 mb-2">
        <IoWalletOutline className="text-4xl" />
        <p className="font-bold pt-1">Current Profits</p>
        </div>
        <p className="text-2xl font-bold mb-3">{`${user?.currentprofits}.00`}</p>
        <Button onClick={()=>navigate('/dashboard/withdraw')} className="bg-white text-[#8670FC] border dark:border-0 font-semibold">Withdraw</Button>
    </div>
    <div className="border dark:border-gray-600  h-[10rem] shadow-md p-4 rounded-md">
        <div className="flex gap-x-2 mb-2">
        <LiaFileInvoiceSolid className="text-4xl" />
        <p className="font-bold pt-1">Invoices</p>
        </div>
        
        <Button onClick={()=>navigate('/dashboard/invoice')} className="bg-white text-orange-400 border dark:border-0 font-semibold mt-4">View</Button>
    </div>

    

</main>

</div>

        }
        
        
         
        </>
  );
}
