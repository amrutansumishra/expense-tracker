import axios from "axios";


const authToken = sessionStorage.getItem('authToken') || "";

const axiosInstance = axios.create({
    baseURL:`${process.env.REACT_APP_URL}`,
    headers: {'authorization': `bearer ${authToken}`}
})

export default axiosInstance;