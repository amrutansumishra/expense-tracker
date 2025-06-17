import { createContext, useState,useContext } from "react";

const contextApp = createContext()

export const useStore = ()=>{
    const contextData = useContext(contextApp)
    if(!contextApp){
        throw new Error("not found in context")
    }
    return contextData
}

export const StoreProvider = ({children})=>{
    const [userDetails,setUserDetails] = useState({})
    const [loader,setLoader] = useState(false)
    const [expenseData,setExpenseData] = useState()

    const contextData={
        userDetails,setUserDetails,
        loader,setLoader,
        expenseData,setExpenseData
    }
    return(
    <contextApp.Provider value={contextData}>
        {children}
    </contextApp.Provider>)
}