import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 3000,
    headers: {'Authorization':`token ${process.env.REACT_APP_GITHUB_TOKEN}`}
  });


export default api;