import axios from 'axios';
import moment from 'moment';

// Axois configuration
const request = axios.create({
  baseURL: "http://localhost:8090",
  headers: { 'content-type': 'application/json' },  
  params: {
      requestId: moment().format('x')
  }
});

const get = async function (url) {
  console.log(url);
  return await request.get(url).then(response => {
    return response.data;
  }).catch(error => {
    console.log(error);
  });
};

export {get}