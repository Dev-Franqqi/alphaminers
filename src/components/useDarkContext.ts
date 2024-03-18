import { useContext } from "react";
import { Darkcontext } from "./Darkprovider";

export default function useDarkContext(){

    const context = useContext(Darkcontext);

    if(!context){
        throw new Error('useDarkContext must be used within a Darkprovider')

    }

    return context
}