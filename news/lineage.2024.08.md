---
type: article
title: LineageOS with MicroG Support!
description: Firmware update
date: 2024-08-14
---

# August 2024 Update for LineageOS <Badge type="tip" text="21" />

## Extra changes
1. MicroG Support
    - [android_frameworks_base](https://github.com/lineageos4microg/docker-lineage-cicd/blob/master/src/signature_spoofing_patches/android_frameworks_base-Android14.patch)
    - [packages_modules_Permission](https://github.com/lineageos4microg/docker-lineage-cicd/blob/master/src/signature_spoofing_patches/packages_modules_Permission-Android14.patch)
1. [Revert "delete gBn/sConstructorMap"](https://github.com/Octavi-Staging/android_system_libhidl/commit/179f84a5ca9fa1c89c1b14597fb6bdc625dc6955) (For fingerprint)

## Download

The update is available in the OTA, manual download is available on the [firmware page](/roms/a14/lineage).

## Checksums

```
MD5: d50aa297d1d88ed59d3f1205cbad9d56
```

```
SHA1: 5cabcfd45ec3a65933eb95ffd6322fdf185ae4cf
```

```
SHA256: 4dd91652e11d2ca27510f88beb6ff779aeb425a1a461d730eed8085ef0315606
```

```
SHA512: 5014782455d68a1fbd320e1d72acedc832ee3753050971537e743335236523e0e7e564685ccfd70784bfeb0e5fef6042a7a83d813e7c26baf35bc351c2f0ca8e
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
