var plugin = function () {
    return window.Overlay;
};
var Overlay = /** @class */ (function () {
    function Overlay() {
    }
    Overlay.canRequestPackageInstalls = function () {
        var overlay = plugin();
        return overlay.canRequestPackageInstalls.apply(overlay, arguments);
    };
    Overlay.openInstallSetting = function () {
        var overlay = plugin();
        return overlay.openInstallSetting.apply(overlay, arguments);
    };
    return Overlay;
}());
export default Overlay;
