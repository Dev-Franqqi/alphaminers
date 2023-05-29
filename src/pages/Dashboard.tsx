import * as CryptoCharts from "cryptocharts"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
import { signOut } from "firebase/auth";
import { auth } from "../components/firebase";
import { useState } from "react";
import { query,where } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../components/firebase";
type B ={
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

interface Person{
  email:string;
  amount:number;
  firstname:string;
  lastname:string;
  uid:string;
  password:string;
  btcAmount:number;
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [user,setUser] = useState<Object|undefined>()
  const [error,setError] = useState(false)
  const [errmessage, setErrmessage] = useState('')
  const [person,setPerson] = useState<undefined|Person>()
  
  

  
    let currentDate = new Date();
    type Options ={
        weekday:'long',
        month:'long',
        day:'numeric'
    }
    let options:Options = { weekday: 'long', month: 'long', day: 'numeric' };

    //refresh 
    const handleRefresh = ()=>{
      window.location.reload()
      
    }

let formattedDate = currentDate.toLocaleDateString(undefined, options);
try{
    CryptoCharts.roiComparison({
      chart_id: "mychart",
      cryptocompare_tickers: ["BTC","ETH"],
      iconomi_tickers: ["BLX","CAR"],
      last_days: 90,
      
      })


}
catch (error) {
  
  
 
  alert("An error occurred while generating the chart.");
}

const cookieValue =Cookies.get("User")
const x:B = cookieValue !== undefined ? JSON.parse(cookieValue) : {email:'',
amount:0,
firstname:'',
lastname:'',
uid:'',
password:'',
btcAmount:0
}
console.log(x)

const logoutHandler = ()=>{

  signOut(auth)
  .then(()=>{
    Cookies.remove("User");
    navigate('/login')
  })
  .catch(err=>{
    setError(true)
    setErrmessage(err.message)
  })

}

useEffect(()=>{
  const check =()=>{
    if(!Cookies.get("User")){
        navigate('/login');
        
  
      }
   



      


}
  check()
  setUser(x)


  const q = query(
    collection(db,"UserInfo"),
    where("uid","==",`${x.uid}`)
)

 getDocs(q)
    .then((snapshot) => {
        // Handle query results
    const inf:Person=snapshot.docs[0].data() as Person
    console.log(inf)
    setPerson(inf)
    
    })

    .catch((error) => {
        // Handle error
        setError(true)
        setErrmessage(error.message)
    });
  
  console.log(user)


  



},[person])

  return (

    <>

    <main className="bg-blue-900 flex flex-col justify-between w-screen h-screen py-4 px-2">
      
    
          
           {error &&  <div className='border-3 border-red-600 bg-white text-red-600 px-2 py-2 rounded-md mb-2 w-fit'>{errmessage}</div>}
        <section className="w-full">

            <header className="text-white text-xs">{formattedDate}</header>
            <div className='flex w-full justify-between mb-4'>
            <h1 className="font-bold text-2xl text-white">ACCOUNT</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={logoutHandler} className="w-6 text-white h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>


          


            </div>
            <hr />
            <div className="w-full flex flex-col md:flex-row md:justify-between">

           
            <section className="w-full shadow-lg  border p-4 h-56 mt-10 rounded-lg text-black md:w-3/5 bg-white">
             
             <div className="flex justify-between mb-5">


        <div className="flex">     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-white rounded-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
                <div className="ml-2">
                    
                   {user && <h3 className="">{person?.email}</h3> } 
                    <p className="text-gray-300 text-xs">Personal</p>
                </div>
                
             </div>

             <div className="bg-white text-xs h-fit py-1 border-black border-3 text-blue-500 w-fit px-2 rounded">
                    USD
                </div>
             </div>

             <hr />
            {person &&  <div className="mb-4 mt-4  font-bold">
              {person.firstname} {person.lastname}
              
              </div>}
            


             <div className=" flex flex-col h-1/5 justify-between">
              <div className="flex justify-between">
              <p className="text-xs text-gray-300 font-bold">BTC Balance</p>
              <p className="text-xs text-gray-300 font-bold">USD Balance</p>
              

              </div>


               {person && <div className="flex justify-between">
               
               
              <p className="text-2xl font-bold ">{person.btcAmount}</p>
              <p className="text-2xl font-bold ">${person.amount}</p>

              </div> } 
                            
             </div>

                
            </section>
            <section className=" w-full md:w-2/6 rounded py-1 px-1 mt-10 h-64 flex justify-between flex-col">
              <h2 className="font-bold text-white text-2xl">DEPOSIT METHODS</h2>

              <div className="w-full border-2 self-center pt-5  rounded-md text-center bg-blue-400 text-white h-16">
                <h4>BITCOIN</h4>
              </div>
              <div className="w-full border self-center pt-5 rounded-md text-center h-16">
              <h4>BITCOIN</h4>

              </div>
              <div className="w-full border self-center pt-5 text-center rounded-md h-16">
              <h4>BITCOIN</h4>

              </div>

            </section>
            </div>


            <section className='mt-5'>
                <h2 className="text-2xl font-bold text-white">CHARTS</h2>
           
            </section>
            <div className="mb-4" id="mychart"></div>
      
      
        </section>


      <div className='sticky bottom-0'>

        <footer className="flex justify-between w-full bg-white border-t-2 py-1 pt-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" onClick={handleRefresh} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-2 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10  font-extrabold  h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 mt-2 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>


        </footer>
      </div>


        </main>
    </>

  )
}