import axios from 'axios';
import localstore from '../mixins/localstore';

let settings = localstore.getStorage(localstore.axiosSettingType);
let obj = {};

if(settings.data.baseURL)  obj.baseURL = settings.data.baseURL;
if(settings.data.headers)  obj.headers = settings.data.headers;

// set new axios instance
export default axios.create(obj);
