import { Dispatch, createContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";
type Props ={
    children: ReactNode;
}
type Darkcontexttype = {
    dark:boolean,
    setDark:Dispatch<boolean>
}
export const Darkcontext = createContext<Darkcontexttype>({dark:false,setDark:()=>{}})


export default function DarkContextProvider({children}:Props){
 
    const [dark,setDark] = useState(false)
    return(
        <Darkcontext.Provider value={{dark,setDark}}>
            {children}

        </Darkcontext.Provider>
    )
}

