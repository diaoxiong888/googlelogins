//import exec module
var exec = require('cordova/exec');

//define googleforgiv object
var googleforgiv = {
    //define method
    isAvailable: function (successCallback) {
        exec(successCallback, null, 'googleforgiv', 'isAvailable', []);
    },

    login: function (options, successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'googleforgiv', 'login', [options]);
    },

    loginWithUserInfo: function (options, successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'googleforgiv', 'login', ["withUserInfo"]);
    },

    trySilentLogin: function (options, successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'googleforgiv', 'trySilentLogin', [options]);
    },

    logout: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'googleforgiv', 'logout', []);
    },

    disconnect: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'googleforgiv', 'disconnect', []);
    }
};

//export module googleforgiv
module.exports = googleforgiv;