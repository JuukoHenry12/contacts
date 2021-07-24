import axios from 'axios'
import { AsyncStorage } from 'react-native';
import env from '../config/env'
let headers={};

const instance =axios.create({
  baseURL:envs.BACKEND_URL,
  headers
})

instance.interceptors.request.use(
  async(config)=>{
    const token = await AsyncStorage.getItem('token')
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  (error)=>{
    return Promise.reject(error);
  }
)
export default axiosInstance;