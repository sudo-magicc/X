# How to flash any recovery

::: warning
Before installing, [unlock the bootloader](/guides/unlock.md) on the Lenovo Z5s phone.
:::


## Based on .img images
Recovery images can be distributed in raw form, like TWRP for example, or as .zip archives.

## TWRP
1. First of all, download the [TWRP recovery image](/roms/recovery/twrp) of the Lenovo Z5s.
 ::: warning
For A14+ you need to download the Dynamic version!
:::
3. Now, set up ADB and Fastboot on your PC.
1. Furthermore, open a command window in the folder itself. To do that, Shift + Right-click on any empty space and then select open command window.
1. Now, connect your Lenovo Z5s to PC.
1. And, boot your Lenovo Z5s device into Fastboot mode. To do that type the following code in the command window
``` bash
adb reboot bootloader
```

7. Now the device will boot into the Fastboot mode. After that type the following code
``` bash
fastboot flash recovery twrp-name.img.
```
::: info
And do replace `twrp-name.img` above with the name of your TWRP recovery image file.
:::

8. Now it will start flashing TWRP Recovery and after that type the following
``` bash
fastboot reboot recovery
```