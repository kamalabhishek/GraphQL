import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

axios.interceptors.request.use(
  (request)=>{
    console.log(" Request is made ");
    request.headers.channelName="abhinay's interceptor"
    return request;
  }
);


axios.interceptors.response.use(
  (response) => {
    if(response.status === 200){
      console.log("Response recieved successfully");
    }
    console.log(response);
    return response;
  }
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();