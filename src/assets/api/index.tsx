import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
});

export default api;