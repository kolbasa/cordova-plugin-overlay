Cordova Overlay Plugin
=========================

This plugin is intended for requesting the screen overlay permission on Android.

# Installation

### Cordova

    cordova plugin add cordova-plugin-overlay

### Ionic + Cordova

    ionic cordova plugin add cordova-plugin-overlay

### Capacitor

    npm install cordova-plugin-overlay

# API

### canOverlayScreen()

```js
Overlay.canOverlayScreen()
    .then(function (result) {
        // true, false
    });
```

### openOverlaySetting()

```js
Overlay.openOverlaySetting()
    .then(function (result) {
        // true, false
    });
```