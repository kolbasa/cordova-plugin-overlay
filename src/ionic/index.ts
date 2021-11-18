const plugin = function () {
    return (<any>window).Overlay;
};

export default class Overlay {

    static canOverlayScreen() {
        let overlay = plugin();
        return overlay.canOverlayScreen.apply(overlay, arguments);
    }

    static openOverlaySetting() {
        let overlay = plugin();
        return overlay.openOverlaySetting.apply(overlay, arguments);
    }

}
