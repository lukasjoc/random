// ==UserScript==
// @name         autocomplete_username
// @namespace    https://lukasjoc.com
// @version      0.1
// @description  autocomplete username in the setttings area
// @author       lukasjoc
// @match        https://github.com/*/*/settings
// ==/UserScript==

(function() {
  "use strict"
  let user = document.querySelector("meta[name=octolytics-actor-login]").content
  let elem = document.querySelectorAll(".Box .Box--overlay form")[1][2]
  elem.value = `${user}/`
})();
