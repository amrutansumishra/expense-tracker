import {jwtDecode} from 'jwt-decode';
export const googleAuthDecode = (data)=>{
    try{
        const result = jwtDecode(data.toString())
        return result
    }catch(e){
        return (console.log(e))
    }
}