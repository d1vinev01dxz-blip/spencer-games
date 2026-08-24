"use strict";
window.PokiSDK = {
    commercialBreak: function() { return Promise.resolve(); },
    customEvent: function() {},
    destroyAd: function() { return Promise.resolve(); },
    displayAd: function() { return Promise.resolve(); },
    gameInteractive: function() {},
    gameLoadingFinished: function() {},
    gameLoadingProgress: function() {},
    gameLoadingStart: function() {},
    gameplayStart: function() {},
    gameplayStop: function() {},
    happyTime: function() {},
    init: function() { return Promise.resolve(); },
    initPokiBridge: function() { return Promise.resolve(); },
    rewardedBreak: function() { return Promise.resolve(); },
    roundEnd: function() {},
    roundStart: function() {},
    setDebug: function() {},
    setPlayerAge: function() {},
    togglePlayerAdvertisingConsent: function() {}
};
var scripts = document.getElementsByTagName("script"),
    scriptUrl = scripts[scripts.length - 1].src,
    root = scriptUrl.split("master-loader.js")[0],
    loaders = {
        unity: "unity.js",
        "unity-beta": "unity-beta.js",
        "unity-2020": "unity-2020.js"
    };
if (!window.config) throw Error("window.config not found");
var loader = loaders[window.config.loader];
if (!loader) throw Error('Loader "' + window.config.loader + '" not found');
if (!window.config.unityWebglLoaderUrl) {
    var versionSplit = window.config.unityVersion ? window.config.unityVersion.split(".") : [],
        year = versionSplit[0],
        minor = versionSplit[1];
    switch (year) {
        case "2019":
            window.config.unityWebglLoaderUrl = 1 === minor ? "UnityLoader.2019.1.js" : "UnityLoader.2019.2.js";
            break;
        default:
            window.config.unityWebglLoaderUrl = "UnityLoader.js"
    }
}
var gameScript = document.createElement("script");
gameScript.src = root + loader;
document.body.appendChild(gameScript);