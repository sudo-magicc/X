# How to unlock device

::: danger
Unlocking the bootloader Will void Your Device Warranty.
Your Phone Will be Erased During The unlocking So Make a backup before Process.
:::

## Steps to unlock Bootloader on Lenovo Z5s

First, we need to get the unlock.img image in order to flash the unlock partition on the device, there are two ways to do this:

## Ways to get unlock.img image

### Official way
1. Go [Here](https://www.zui.com/iunlock) Enter Require Device Details Like IMEI, Serial Number & Email address.
::: tip
You can get the IMEI by typing `*#06#` into the dialer. You can get the serial number by going to `About phone -> Technical details -> Status` in the Settings app
:::
1. Now Click Submit application. Wait until You Will Receive `unlock_bootloader.img` File via Email

### Unofficial way
1. Just download [unlock_bootloader.img](https://nextcloud.cakestwix.com/s/mNQejibxkbRgNL6)
::: info
The bootloader will not check the image to see if it is yours, so you can flash any other image. It's safe.
:::

## Unlock process itself
1. On Phone Enable developer options. (Press Build Number 7 times)
1. Enable `Usb Debugging` and `Oem Unlock` From Developers Options
1. Download & Install adb fastboot programs
1. Now Move unlock_bootloader.img File in Platform tools folder (adb.exe, fastboot.exe, etc)
1. Reboot Phone to bootloader Connect to PC with usb
1. Go to Platform tools Folder and on top address bar type cmd and hit enter on Command Window type below code to unlock bootloader

``` bash
fastboot flash unlock unlock_bootloader.img
```

7. Now type the following command to unlock the bootloader
``` bash
fastboot oem unlock-go
```

8. The device will automatically reboot, and your bootloader will be unlocked. Since the device resets completely, you will need to re-enable USB debugging to continue.
