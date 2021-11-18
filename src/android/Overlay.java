package de.kolbasa.overlay;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;

public class Overlay extends CordovaPlugin {

    @Override
    public void onPause(boolean multitasking) {
        super.onPause(multitasking);
    }

    @Override
    public void onResume(boolean multitasking) {
        super.onResume(multitasking);
    }

    private void canOverlayScreen(CallbackContext callbackContext) {
        try {
            //
        } catch (Exception e) {
            //
        }
    }

    private void openOverlaySetting(CallbackContext callbackContext) {
        try {
            //
        } catch (Exception e) {
            //
        }
    }

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) {

        switch (action) {
            case "canOverlayScreen":
                cordova.getThreadPool().execute(() -> canOverlayScreen(callbackContext));
                break;
            case "openOverlaySetting":
                cordova.getThreadPool().execute(() -> openOverlaySetting(callbackContext));
                break;
            default:
                return false;
        }

        return true;
    }

}