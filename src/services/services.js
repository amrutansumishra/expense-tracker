import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
export const fetchExpense = async()=>{
    try{
        const result = await axios.get('')
        return result
    }catch(e){
        return (console.log(e))
    }
}

export const addExpense = ()=>{
    
}

export const deleteExpense = ()=>{
    
}

export const editExpense = ()=>{
    
}

export const googleAuth = (data)=>{
    try{
        const result = jwtDecode(data)
        return result
    }catch(e){
        return (console.log(e))
    }
}