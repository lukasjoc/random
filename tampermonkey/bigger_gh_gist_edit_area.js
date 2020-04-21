// ==UserScript==
// @name         bigger_gh_gist_edit_area
// @namespace    https://lukasjoc.com
// @version      0.1
// @description  make the edit area of a github gist bigger
// @author       lukasjoc
// @match        https://gist.github.com/*/*/edit
// ==/UserScript==

(function() {
  "use strict"
  const custom_height = "1080px"
  let edit_area = document.querySelectorAll(".commit-create")
  let childs = edit_area[0].children
  childs[childs.length-1].style.height = custom_height
})();
