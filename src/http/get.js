import HTTP from './axios';

export default {
    async getToken() {
        return window.localStorage.getItem('_token');
    },
    /**
     * Get configuration data from server
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 1
    async initialize() {
        let token = await this.getToken();
        HTTP.defaults.headers.Authorization = `Bearer ${token}`;

        return HTTP.get('initialize');
    },

    /**
     * Get directories for the tree (upper level)
     * @param disk
     * @param path
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 2
    tree(disk, path) {
        // Mohammad Ashrafuddin Ferdousi : 2
        return HTTP.get('tree', { params: { disk, path } });
    },

    /**
     * Select disk
     * @param disk
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 3
    selectDisk(disk) {
        return HTTP.get('select-disk', { params: { disk } });
    },

    /**
     * Get content (files and folders)
     * @param disk
     * @param path
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 4
    content(disk, path) {
        return HTTP.get('content', { params: { disk, path } });
    },

    /**
     * Item properties
     */
    /* properties(disk, path) {
      return HTTP.get('properties', { params: { disk, path } });
    }, */

    /**
     * URL
     * @param disk
     * @param path
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 5
    url(disk, path) {
        return HTTP.get('url', { params: { disk, path } });
    },

    /**
     * Get file to editing or showing
     * @param disk
     * @param path
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 6
    getFile(disk, path) {
        return HTTP.get('download', { params: { disk, path } });
    },

    /**
     * Get file - ArrayBuffer
     * @param disk
     * @param path
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 7
    getFileArrayBuffer(disk, path) {
        return HTTP.get('download', {
            responseType: 'arraybuffer',
            params: { disk, path },
        });
    },

    /**
     * Image thumbnail
     * @param disk
     * @param path
     * @returns {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 8
    thumbnail(disk, path) {
        return HTTP.get('thumbnails', {
            responseType: 'json',
            params: { disk, path },
        });
    },

    /**
     * Image preview
     * @param disk
     * @param path
     * @return {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 9
    preview(disk, path) {
        return HTTP.get('preview', {
            responseType: 'json',
            params: { disk, path },
        });
    },

    /**
     * Download file
     * @param disk
     * @param path
     * @return {*}
     */
    // Mohammad Ashrafuddin Ferdousi : 10
    download(disk, path) {
        return HTTP.get('download', {
            responseType: 'arraybuffer',
            params: { disk, path },
        });
    },
};
