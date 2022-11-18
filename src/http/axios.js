import axios from 'axios';
import localstore from '../mixins/localstore';

let settings = localstore.getStorage(localstore.axiosSettingType);

if(settings) {
    if(settings.baseURL)  axios.defaults.baseURL = settings.baseURL;
    if(settings.withCredentials)  axios.defaults.withCredentials = settings.withCredentials;
    if(settings.headers)  axios.defaults.headers = settings.headers;
}

// set new axios instance
export default axios;
