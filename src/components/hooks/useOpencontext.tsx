import { Opencontext } from "../Opencontextprovider";
import { useContext } from "react";


export default function useOpencontext(){

    const context = useContext(Opencontext)
    if(!context){
        throw new Error('useOpencontext must be used within an OpenContextProvider')

    }
    return context
}