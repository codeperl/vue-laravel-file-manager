import axios from 'axios';
import localstore from '../mixins/localstore';

let settings = localstore.getStorage(localstore.axiosSettingType);
let axiosSettings = {};

if(settings) {
    if(settings.baseURL)  axiosSettings.baseURL = settings.baseURL;
    if(settings.withCredentials)  axiosSettings.withCredentials = settings.withCredentials;
    if(settings.headers)  axiosSettings.headers = settings.headers;
}

// set new axios instance
export default axios.create({
    axiosSettings
});
