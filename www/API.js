var exec = require('cordova/exec');

var PLUGIN = 'Overlay';

module.exports = {

    /**
     * @returns {Promise<boolean>}
     */
    canOverlayScreen: function () {
        return new Promise(function (resolve, reject) {
            exec(resolve, reject, PLUGIN, 'canOverlayScreen', []);
        }).then(function (resp) {
            return resp === 1;
        });
    },

    /**
     * @returns {Promise<void>}
     */
    openOverlaySetting: function () {
        return new Promise(function (resolve, reject) {
            exec(resolve, reject, PLUGIN, 'openOverlaySetting', []);
        }).then(function (resp) {
            return resp === 1;
        });
    }

};

