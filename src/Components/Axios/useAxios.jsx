import axios from "axios";

export const AxiosSecure = axios.create({
    // baseURL: "http://localhost:3000",
    baseURL: "https://watch-server-07.vercel.app",
    withCredentials: true   
})
const useAxios = () => {
return AxiosSecure
};

export default useAxios;