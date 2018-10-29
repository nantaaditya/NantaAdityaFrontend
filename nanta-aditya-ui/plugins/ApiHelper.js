import axios from 'axios';
import moment from 'moment';
var querystring = require('querystring');

// Axois configuration
const base = axios.create({  
  baseURL: process.env.isProd ? process.env.prodApi : process.env.devApi,
  headers: { 
    'Accept': 'application/json',
    'Cache-Control': 'no-cache'    
  },  
  credentials: false,  
  params: {
      requestId: moment().format('x')
  }
});


const get = function (url) {  
  return base.get(url).then(response => {    
    return response.data;
  }).catch(error => {
    return error.response.data;
  });
};

const getPost = function (url) {
  console.log(url);
  return base.get(url);
};

const getBlog = function (url, c) {
  console.log(url);
  return base.get(url, {params:{
    client: c
  }}).then(response => {
    return response.data;
  }).catch(error => {
    return error.response.data;
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

export {get, getBlog, getPost, post};