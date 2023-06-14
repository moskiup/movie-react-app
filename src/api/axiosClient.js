
import axios from 'axios';

import apiConfig from './apiConfig';


const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${apiConfig.apiKey}`
  },
  // paramsSerializer: params => queryString.stringify({...params})
})



axiosClient.interceptors.request.use(async (config)=>{
  return config;
});

axiosClient.interceptors.response.use((response)=>{


  if(response && response.data)
    return response.data;
} , (error)=>{
  throw error;
});
  


// export function get(path) {
//   return fetch(API + path, {
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
//       "Content-Type": "application/json;charset=utf-8",
//     },
//   }).then((result) => result.json());
// }

export default axiosClient;