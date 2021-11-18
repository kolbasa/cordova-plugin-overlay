declare module 'cordova-plugin-overlay' {

    export class Overlay {

        static canOverlayScreen(success?: Function, failure?: Function): Promise<boolean>;

        static openOverlaySetting(success?: Function, failure?: Function): Promise<boolean>;

    }

    export default Overlay;

}
