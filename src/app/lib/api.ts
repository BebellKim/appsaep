import axios from "axios";

//criar uma instancia axios

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export default api;