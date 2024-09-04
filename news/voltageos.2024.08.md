---
type: article
title: VoltageOS with GrapheneOS stuff!
description: Initial build
date: 2024-08-02
---

# July 2024 Build for VoltageOS <Badge type="warningc" text="3.5" />

## ROM Side
VoltageOS. v3.5 includes a rebase over Quarterly Platform Release 3 (android-14.0.0_r50) with July ASB (android-14.0.0_r53) and almost all the goodies from v3.4 with additions being
 - Signed Builds
 - Redesigned VoltageOS recovery
 - Disable Smart Pixels on UDFPS


## Device updates

1. All changes from A14 builds

## Download

The update is available in the OTA, manual download is available on the [firmware page](/roms/a14/voltage).

## Checksums

```
MD5: 1c3518c555442728fd91181bb753fecb
```

```
SHA1: fcbf95ea047b10747d4eea876b577223fdcea5d5
```

```
SHA256: 25bfcbbc359be9247d2257ccd3ea83b5d7c380cce4d20ee92ae6b4484fd30f18
```

```
SHA512: 0458cdf50873794fa8c377551694b1ae9fe8626a52fac81eab2f13d0eea58fa2683460108c3c201d279bb70cde16267e44aa79a64fb6bf3560ddebb3acb5a5ee
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
