import HTTP from './axios';

export default {
    /**
     * Create new file
     * @param disk
     * @param path
     * @param name
     * @returns {Promise<AxiosResponse<any>>}
     */
    // Mohammad Ashrafuddin Ferdousi : 11
    createFile(disk, path, name) {
        return HTTP.post('create-file', { disk, path, name });
    },

    /**
     * Update file
     * @param formData
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 12
    updateFile(formData) {
        return HTTP.post('update-file', formData);
    },

    /**
     * Create new directory
     * @param data
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 13
    createDirectory(data) {
        return HTTP.post('create-directory', data);
    },

    /**
     * Upload file
     * @param data
     * @param config
     * @returns {Promise<AxiosResponse<any>>}
     */
    // Mohammad Ashrafuddin Ferdousi : 14
    upload(data, config) {
        return HTTP.post('upload', data, config);
    },

    /**
     * Delete selected items
     * @param data
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 15
    delete(data) {
        return HTTP.post('delete', data);
    },

    /**
     * Rename file or folder
     * @param data
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 16
    rename(data) {
        return HTTP.post('rename', data);
    },

    /**
     * Copy / Cut files and folders
     * @param data
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 17
    paste(data) {
        return HTTP.post('paste', data);
    },

    /**
     * Zip
     * @param data
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 18
    zip(data) {
        return HTTP.post('zip', data);
    },

    /**
     * Unzip
     * @returns {*}
     * @param data
     */
    // Mohammad Ashrafuddin Ferdousi : 19
    unzip(data) {
        return HTTP.post('unzip', data);
    },
};
