var API = require('./API');

module.exports = {

    /**
     * @param {function=} success
     * @param {function=} failure
     *
     * @returns {Promise<boolean>|void}
     */
    canOverlayScreen: function (success, failure) {
        if (success == null && failure == null) {
            return API.canOverlayScreen();
        } else {
            API.canOverlayScreen().then(success).catch(failure);
        }
    },

    /**
     * @param {function=} success
     * @param {function=} failure
     *
     * @returns {Promise<boolean>|void}
     */
    openOverlaySetting: function (success, failure) {
        if (success == null && failure == null) {
            return API.openOverlaySetting();
        } else {
            API.openOverlaySetting().then(success).catch(failure);
        }
    }

};
