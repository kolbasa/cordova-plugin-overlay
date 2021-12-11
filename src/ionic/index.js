var plugin = function () {
    return window.Overlay;
};
var Overlay = /** @class */ (function () {
    function Overlay() {
    }
    Overlay.canOverlayScreen = function () {
        var overlay = plugin();
        return overlay.canOverlayScreen.apply(overlay, arguments);
    };
    Overlay.openOverlaySetting = function () {
        var overlay = plugin();
        return overlay.openOverlaySetting.apply(overlay, arguments);
    };
    return Overlay;
}());
export default Overlay;
