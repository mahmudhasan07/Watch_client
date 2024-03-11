import axios from "axios";

export const AxiosSecure = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true   
})
const useAxios = () => {
return AxiosSecure
};

export default useAxios;