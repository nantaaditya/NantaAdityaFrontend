import axios from 'axios';
import moment from 'moment';
var querystring = require('querystring');

// Axois configuration
const base = axios.create({
  baseURL: "http://localhost:8090",
  headers: { 
    'Accept': 'application/json'    
  },  
  credentials: false,  
  params: {
      requestId: moment().format('x')
  }
});

const get = async function (url) {
  console.log(url);
  return await base.get(url).then(response => {
    return response.data;
  }).catch(error => {
    console.log(error.response.data);
  });
};

const post = function (url, request){  
  return base.post(url, request, {
    headers: {
      'Content-Type': 'application/json',    
    }
  }).then(response => {    
    return response;
  }).catch(error => {    
    return error.response.data;
  });
};

export {get, post};