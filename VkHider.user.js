// ==UserScript==
// @name         VkHider
// @namespace    http://vk.com/
// @version      0.1
// @description  Delete shit from vk.com
// @author       dafatov
// @match        https://*.vk.com/im*
// @match        http://*.vk.com/im*
// @license      MIT
// @grant        none
// ==/UserScript==

const debug = false;

function log(log) {
    if (!debug) {
        console.log(log);
    }
}

(function() {
    'use strict';

    var shit = document.querySelector("#im_dialogs > ul");

    if (shit === null) {
        log('Already removed');
        return;
    }
    shit.remove();
})();