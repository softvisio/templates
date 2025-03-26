# Introduction

Projects templates.

## Cordova

In `build.json` set `developmentTeam` id. Get your TeamID from <https://developer.apple.com/account/#/membership>.

### Plugins

```sh
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-network-information
cordova plugin add cordova-plugin-firebasex@latest-cli
cordova plugin add cordova-plugin-badge
```

If you are using old plugins, that are not compatible with the `androidx` you need to add:

```sh
cordova plugin add cordova-plugin-androidx-adapter
```
