package de.kolbasa.overlay;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.provider.Settings;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;

public class Overlay extends CordovaPlugin {

    private CallbackContext cbcOpenSettings;

    @Override
    public void onResume(boolean multitasking) {
        super.onResume(multitasking);
        if (cbcOpenSettings != null) {
            canOverlayScreen(cbcOpenSettings);
        }
    }

    private void openOverlaySetting(Context context) {
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
            intent.setData(Uri.parse(String.format("package:%s", context.getPackageName())));
            context.startActivity(intent);
        }
    }

    private void canOverlayScreen(CallbackContext callbackContext) {
        boolean result = true;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            result = Settings.canDrawOverlays(cordova.getActivity().getApplicationContext());
        }
        callbackContext.success(result ? 1 : 0);
    }

    private void openOverlaySetting(CallbackContext callbackContext) {
        cbcOpenSettings = callbackContext;
        openOverlaySetting(cordova.getContext());
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