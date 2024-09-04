---
type: article
title: VoltageOS with GrapheneOS stuff!
description: Firmware update
date: 2024-08-14
---

# August 2024 Build for VoltageOS <Badge type="warningc" text="3.6" />

## ROM Side
* Merged August 2024 Security Patch (android_14.0.0-r55)
* Fixed some System crashes.
* Added Desktop Mode.
* Fixed 5GHz Hotspot.
* Fixed some inconsistencies on VoltageOS Setup Wizard. 
* Updated APNs. 
* Fixed Seedvault Selection. 
* Added the ability to run another app as Floating Window in GameSpace.
* Fixed Light Theme on Launcher for Tablet devices.
* Updated Monet Themed Launcher Icons

## Download

The update is available in the OTA, manual download is available on the [firmware page](/roms/a14/voltage).

## Checksums

```
MD5: 52aaf6df51dd5c7fc0ed436ace394187
```

```
SHA1: 53c31d3b2f71266abc932b377d2e9fbdbabf892c
```

```
SHA256: 5e0c23989a2f9acb06fc00c3665704677feaccac6d57ce086821899382ec72aa
```

```
SHA512: 750535563ea3edf02dd3e5d3b8b91a32f40ef8494d126810a22f4d53fd2eb4f9bd5f8c84c0e2450ce8a95e972fbaec2ac22d3887d7c2b958977287b37c86b660
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
