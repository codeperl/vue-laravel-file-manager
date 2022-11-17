export default {
    axiosSettingType: 'axiosSettings',

    setStorage: function(key, data) {
        this.removeStorage(key);
        let d = new Date();
        data = {
            'id': Math.random()*d.getTime(),
            'data': data,
            'time': d.getTime()
        };
        data = JSON.stringify(data);
        data =  encodeURIComponent(btoa(data));
        return localStorage.setItem('@'+key, data);
    },

    getStorage: function (key) {
        let jsonData = localStorage.getItem('@'+key);
        if(jsonData != null){
            jsonData = atob(decodeURIComponent(jsonData));
            jsonData =  JSON.parse(jsonData);
            return jsonData.data;
        }else{
            return jsonData;
        }
    },

    removeStorage: function (key) {
        return localStorage.removeItem(key);
    },
    removeAllStorage: function () {
        for (var key in localStorage){
           if(key.indexOf("@") == 0){
               localStorage.removeItem(key);
           }
        }
    },
}
