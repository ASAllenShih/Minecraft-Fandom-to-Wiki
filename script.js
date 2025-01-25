// ==UserScript==
// @name        Minecraft-Fandom-to-Wiki
// @namespace   https://minecraft.fandom.com/
// @version     1.0
// @description Redirect minecraft.fandom.com to minecraft.wiki
// @author      AS_Allen_Shih
// @match       https://minecraft.fandom.com/*
// @icon        https://cdn.asallenshih.tw/favicon.ico
// @grant       none
// @run-at      document-start
// @updateURL   https://raw.githubusercontent.com/ASAllenShih/Minecraft-Fandom-to-Wiki/refs/heads/main/script.js
// @downloadURL https://raw.githubusercontent.com/ASAllenShih/Minecraft-Fandom-to-Wiki/refs/heads/main/script.js
// ==/UserScript==

(function() {
    var url = location.href;
    var newURL = url.replace('minecraft.fandom.com', 'minecraft.wiki');
    var languageMatch = newURL.match(/https:\/\/minecraft\.wiki\/([a-zA-Z-]+)\/wiki\//);
    if (languageMatch) {
        var language = languageMatch[1];
        newURL = newURL.replace(`https://minecraft.wiki/${language}/`, `https://${language}.minecraft.wiki/`);
    }
    newURL = newURL.replace('/wiki/', '/w/');
    location.replace(newURL);
})();
