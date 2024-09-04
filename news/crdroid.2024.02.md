---
type: article
title: crDroid February 2024 Update
description: Firmware update
date: 2024-02-13
---

# February 2024 Update for crDroid <Badge type="tip" text="10.2" />

## General updates

### What's New?

1. Initial crDroid 10.2 release
1. February security patches (android-14.0.0_r25)
1. SafetyNet fix
1. Customize flashlight blink for incoming calls (crDroid Settings -> Notifications)
1. Control in-call vibration (Settings -> Sound)
1. Create custom vibration patterns (Settings -> Sound)
1. Schedule Always On Display
1. Added back UDFPS animations

### SystemUI enhancements

1. Enable fading squiggle animation for QS media player
1. Align QS carrier text for better visuals
1. Streamlined screenshot sound/vibration logic
1. Adjusted VolumeDialogImpl layout direction

### Bug fixes

1. Resolved device reboots caused by SecurityException
1. Fixed Google Translate login issues
1. Addressed IslandView issues
1. Removed split notification shade by default

### Launcher3 improvements

1. Introduced overview scrolling scale animation
1. Fixed overview scrolling scale animation issues
1. Enabled uninstalling work apps
1. Fixed app uninstalls from recents

### Other improvements and changes

1. Enhanced volume stream steps option
1. Added missing face unlock animation
1. Implemented native Monet settings for theme style adjustments
1. Removed unnecessary battery info from About page
1. Increased QS & QQS header space for A11 QS style
1. Optimized ART performance
1. Updated Dialer, Eleven, Aperture apps
1. Webview upgraded to 121.0.6167.101
1. Various other minor optimizations and changes
1. Updated translations

## Device updates

1. February Security Patch (https://crdroid.net/blog/2024-02-08-crDroid-10.2-released)
1. Inherit common partition reserved sizes
1. Remove libtinyxml
> It's deprecated and not being built.
4. Use FUSE passthrough by default
1. Report max frequency to miHoYo games
1. wlan: Enable Optimized Power Management
1. wlan: Remove obselete gEnableBypass11d config
1. Switch to lz4 for zram
1. Do not try to install prebuilt apps
> We do not have AdrenoTest.apk or SWE_Browser.apk so it does not make
sense to try to install them.

## Download

The update is available in the OTA, manual download is available on the [firmware page](/roms/a14/crdroid).

## Checksums

```
MD5: ed6df15303f9bc8f9e5057e06534cd85
```

```
SHA1: adba5c366c27d1b5cf811fcf3459cd375b99b9be
```

```
SHA256: 2ac6320201a92df1a61cdb2c9e061957b04d2ff125e4076aa90921d27724896b
```

```
SHA512: 07e38cf96a0a6e40a0747d9bc799080f409ab49a0519c015499f8be2c599700ce9244ff15f6c273ace4917af5d26dcfba6bcd27f25b9330b03768d6fc7636ee2
```
