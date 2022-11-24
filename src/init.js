import store from './store';
import FileManager from './FileManager.vue';
import localstore from './mixins/localstore';
import HTTP from './http/axios';

export default {
    install: (app, options) => {
        // eslint-disable-next-line no-console
        if (!options.store) console.error('Please provide a vuex store!!');

        app.component('file-manager', FileManager);

        options.store.registerModule('fm', store);

        localstore.setStorage(localstore.axiosSettingType, options.settings);

        let settings = options.settings;

        if(settings) {
            if(settings.baseURL)  HTTP.defaults.baseURL = settings.baseURL;
            if(settings.withCredentials)  HTTP.defaults.withCredentials = settings.withCredentials;
            if(settings.headers)  HTTP.defaults.headers = settings.headers;
        } else {
            throw `settings.baseURL: ${settings.baseURL}, settings.withCredentials: ${settings.withCredentials}, settings.headers: ${settings.headers} is set!`;
        }
    },
};
