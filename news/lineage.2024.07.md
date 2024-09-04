---
type: article
title: LineageOS with MicroG Support!
description: Initial build
date: 2024-07-29
---

# July 2024 Update for LineageOS <Badge type="tip" text="21" />

## 21 - Finally old enough to drink (at least in the US)!

### New Features!


1. Security patches from January 2023 to February 2024 have been merged to LineageOS 18.1 through 21.
1. Glimpse of Us: We now have a shining new app, Glimpse! It will become the default gallery app starting from LineageOS 21
1. An extensive list of applications were heavily improved or redesigned:
    - Aperture: A touch of Material You, new video features, and more!
    - Calculator: Complete Material You redesign
    - Contacts: Design adjustments for Material You
    - Dialer: Large cleanups and code updates, Material You and bugfixes
    - Eleven: Some Material You design updates
    - Jelly: Refreshed interface, Material You and per-website location permissions
    - LatinIME: Material You enhancements, spacebar trackpad, fixed number row
    - Messaging: Design adjustments for Material You
4. A brand new boot animation by our awesome designer Vazguard!
1. SeedVault and Etar have both been updated to their newest respective upstream version.
1. WebView has been updated to Chromium 120.0.6099.144.
1. We have further developed our side pop-out expanding volume panel.
1. Our Updater app should now install A/B updates much faster (thank Google!)
1. We have contributed even more changes and improvements back upstream to the FOSS Etar calendar app we integrated some time back!
1. We have contributed even more changes and improvements back upstream to the Seedvault backup app.
1. Android TV builds still ship with an ad-free Android TV launcher, unlike Google’s ad-enabled launcher - most Android TV Google Apps packages now have options to use the Google ad-enabled launcher or our ad-restricted version.
1. Our merge scripts have been largely overhauled, greatly simplifying the Android Security Bulletin merge process, as well as making supporting devices like Pixel devices that have full source releases much more streamlined.
1. Our extract utilities can now extract from OTA images and factory images directly, further simplifying monthly security updates for maintainers on devices that receive security patches regularly.
1. LLVM has been fully embraced, with builds now defaulting to using LLVM bin-utils and optionally, the LLVM integrated assembler. For those of you with older kernels, worry not, you can always opt-out.
1. Our Setup Wizard has seen adaptation for Android 14, with improved styling, more seamless transitions, and significant amounts of legacy code being stripped out.
1. The developer-kit (e.g. Radxa 0, Banana Pi B5, ODROID C4, Jetson X1) experience has been heavily improved, with UI elements and settings that aren’t related to their more restricted hardware feature-set being hidden or tailored!
1. QS light menu has been dropped due to fact that it conflicted with security bulletin merges every month, if someone wishes to port this feature in a less intrusive manner, we are always open to reviewing contributions!


## Device updates

1. All changes from A14 builds

## Extra changes
1. MicroG Support
    - [android_frameworks_base](https://github.com/lineageos4microg/docker-lineage-cicd/blob/master/src/signature_spoofing_patches/android_frameworks_base-Android14.patch)
    - [packages_modules_Permission](https://github.com/lineageos4microg/docker-lineage-cicd/blob/master/src/signature_spoofing_patches/packages_modules_Permission-Android14.patch)
1. [Revert "delete gBn/sConstructorMap"](https://github.com/Octavi-Staging/android_system_libhidl/commit/179f84a5ca9fa1c89c1b14597fb6bdc625dc6955) (For fingerprint)

## Download

The update is available in the OTA, manual download is available on the [firmware page](/roms/a14/lineage).

## Checksums

```
MD5: e297d6ff5cf21f67bc64665eff42d5ab
```

```
SHA1: e7b9baa6123e67243a22894171a403b9d87ad927
```

```
SHA256: 8aced7b47ab7405aa46dec3a6b1c8bbacc456ac800ef23a95414f7635c45b9ae
```

```
SHA512: b6139c301b88fa0c0603c2ff75f6a14ffeea36d11c4e984492e197cbdc9246139df028869b8525ff5f92791ce36913043793aa2f52eb89703ef9b70ec05f6f4e
```

## Signed build

### How to use

1. Clone [`update_verifier`](https://github.com/LineageOS/update_verifier)
1. Install Python3 and pip
1. Install all requirements `pip3 install -r requirements.txt`
1. Copy my public key to `lineageos_pubkey`
1. Run python script `python3 update_verifier.py lineageos_pubkey /path/to/zip`

```
-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA1fyXOicn98sSrXhILjKa
u1fyVCBUrLU60ChYdGYJLPl+v1ziGkEontMQxgee8tecoCEwBQF8ea8mdh9pDOpC
s3KPkkLZCLdY1HrqzzhJu1RbVv7pQRZd3B73ExILwo1sTPzkEx4t0Sk2g4+u1sPu
2ezU2e+c58FtUX+XVUDuQd3O0dL7gl+fDA56nKs2m4rVqYjF0RPN52c35DurElXF
axK+7CKiT4TP2eTvGEOZDPitOYHniFy3w4LYxX7yWtWfRcrzwwuDAekw4b5bS8Ri
CsyqSKXKaC1RtxAn16Z788u8qZ6cKqDm1BK6F9SMuGL8p66sUOu6u+ccI4aJ++tG
Ndk3eN3B04lMU86A7GXL1OgCEjOfIOB8plvYKwIxQcnSFvqE+D8wjEl5jIfAQFla
m+rg7PGT/yDUVjLwQ0gi08V6xSaECZ/umWbqr/FnI9mYzBwYfDt8MW8RXt5FCIDD
M43B4+wsCBoyj0G4ylMBdtczeXciW/79LFRMzX2XYV/Mb76CSxO4rvtR1Fa79HbB
Cd9lJ5snHWjOkQpGdp/yunw7G6T6KNVLBBsPiUhqyN+gukfvoma5wgyqzSnH30wY
sOwkBfFtHyyHDubvBHqSiOIsZOxM21EDahEtxtqNZvL8ind4HRNkH6WacdNyERvI
obcPznRo49Ar5e+NuPf+iosCAwEAAQ==
-----END PUBLIC KEY-----

```
