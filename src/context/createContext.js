import { createContext, useState } from "react";
export const contextApp = createContext()
export const ContextProvider = ({children})=>{
    const [validUser,setValiduser] = useState(true)

    const contextData={
        validUser,
        setValiduser
    }
    return(
    <contextApp.Provider value={contextData}>
        {children}
    </contextApp.Provider>)
}