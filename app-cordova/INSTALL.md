# ADD PLUGINS

**WARNING!** Do not use `cordova prepare`, it installs outdated platforms. Use `cordova platform add xxx@latest` instead. After platform added remove cordova dependencies from `package.json`.

```
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-network-information
cordova plugin add cordova-plugin-whitelist
```

```
cordova plugin add cordova-plugin-badge
cordova plugin add phonegap-plugin-push
```

In `build.json` set `developmentTeam` id. Get your TeamID from [https://developer.apple.com/account/#/membership](https://developer.apple.com/account/#/membership).
