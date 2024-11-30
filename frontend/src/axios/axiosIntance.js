import axios from "axios";

const axiosInstance = axios.create({
    baseURL:`${process.env.REACT_APP_URL}`,
})

axiosInstance.interceptors.request.use((config)=>{
    const authToken = sessionStorage.getItem('authToken') || "";
    const excludedEndPoint =['/login','/signup'];
    const isExcluded = excludedEndPoint.some((endpoint)=>config.url.includes(endpoint))
    if(!isExcluded && authToken ){
        config.headers.Authorization = `bearer ${authToken}`
    }
    return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use((response)=>{
        return response
    },
    (error)=>{
        if(error.response && error.response.status===401){
            sessionStorage.removeItem('authToken');
            window.location.href='/';
        }
        return Promise.reject(error)
    }
)

export default axiosInstance;