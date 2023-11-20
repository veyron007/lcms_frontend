import axios from 'axios';

const axiosClient = axios.create();

// axiosClient.defaults.baseURL = '';

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;


export function getRequest(URL) {
    console.log(URL);
    console.log(process.env.NEXT_PUBLIC_API_HOST);
    return axiosClient.get(`${process.env.NEXT_PUBLIC_API_HOST}/${URL}`).then(response => response);
  }
  
  export function postRequest(URL, payload) {
    return axiosClient.post(`${process.env.NEXT_PUBLIC_API_HOST}/${URL}`, payload).then(response => response);
  }
  
  export function patchRequest(URL, payload) {
    return axiosClient.patch(`${process.env.NEXT_PUBLIC_API_HOST}/${URL}`, payload).then(response => response);
  }
  
  export function deleteRequest(URL) {
    return axiosClient.delete(`${process.env.NEXT_PUBLIC_API_HOST}/${URL}`).then(response => response);
  }