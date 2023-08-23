import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://cafe-app-s03x.onrender.com/'
    // baseURL: 'http://localhost:8000'
});

export default Axios