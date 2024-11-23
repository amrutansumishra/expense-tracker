import axiosInstance from '../axios/axiosIntance';

export const fetchExpense = async(limit)=>{
    try{
        const result = await axiosInstance.get(`api/expenses?limit=${limit}`)
        return result
    }catch(e){
        return (console.log(e))
    }
}

export const addExpense = async(data)=>{
    try{
        const result = await axiosInstance.post(`api/expenses`,{...data})
        return result
    }catch(e){
        return (console.log(e))
    }
}

export const deleteExpense =async(id)=>{
    try{
        const result = await axiosInstance.delete(`api/expenses`)
        return result
    }catch(e){
        return (console.log(e))
    }
}

export const editExpense = async(id,data)=>{
    try{
        const result = await axiosInstance.patch(`api/expenses`)
        return result
    }catch(e){
        return (console.log(e))
    }
}
export const googleAuth = async(token)=>{
    try{
        const result = await axiosInstance.post(`api/google-login`,{token})
        return result
    }catch(e){
        return (console.log(e))
    }
}

export const userAuth = async(data)=>{
    console.log(data)
    try{
        const result = await axiosInstance.post(`api/login`,{...data})
        return result
    }catch(e){
        return (console.log(e))
    }
}

export const userRegister = async(data)=>{
    console.log(data)
    try{
        const result = await axiosInstance.post(`api/signup`,{...data})
        return result
    }catch(e){
        return (console.log(e))
    }
}

export const sentOtp = async(email)=>{
    try{
        const result = await axiosInstance.post(`api/send-otp`,{email})
        return result
    }catch(e){
        return (console.log(e))
    }
}
export const verifyOtp = async(email,otp)=>{
    try{
        const authDetails = {email,otp}
        const result = await axiosInstance.post(`api/verify-otp`,{authDetails})
        return result
    }catch(e){
        return (console.log(e))
    }
}