import axios from 'axios';
import localstore from '../mixins/localstore';

let settings = localstore.getStorage(localstore.axiosSettingType);
let obj = {};

if(settings) {
    if(settings.baseURL)  obj.baseURL = settings.baseURL;
    if(settings.headers)  obj.headers = settings.headers;
}

// set new axios instance
export default axios.create(obj);
