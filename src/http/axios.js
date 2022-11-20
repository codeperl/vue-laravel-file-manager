import axios from 'axios';
import localstore from '../mixins/localstore';

let settings = localstore.getStorage(localstore.axiosSettingType);

if(settings) {
    if(settings.baseURL)  axios.default.baseURL = settings.baseURL;
    if(settings.withCredentials)  axios.default.withCredentials = settings.withCredentials;
    if(settings.headers)  axios.default.headers = settings.headers;
}

// set new axios instance
export default axios;
