import { createContext, useState,useContext } from "react";

const contextApp = createContext()

export const useStore = ()=>{
    const contextData = useContext(contextApp)
    return contextData
}

export const StoreProvider = ({children})=>{
    const [validUser,setValiduser] = useState({status:false,userData:{}})

    const contextData={
        validUser,
        setValiduser
    }
    return(
    <contextApp.Provider value={contextData}>
        {children}
    </contextApp.Provider>)
}