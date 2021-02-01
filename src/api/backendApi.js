import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default axios.create({
    baseURL: 'https://healing-waters-backend.herokuapp.com/api',
    
});
