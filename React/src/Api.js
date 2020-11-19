import Axios from 'axios';

const api = Axios.create(
{
    baseURL: "http://127.0.0.1:8000/Best/",
    timeout: 3000,
});
export default api;