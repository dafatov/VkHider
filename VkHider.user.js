// ==UserScript==
// @name         VkHider
// @namespace    http://vk.com/
// @version      1.0
// @description  Delete shit from vk.com
// @author       dafatov
// @match        https://vk.com/im*
// @match        http://vk.com/im*
// @license      MIT
// @grant        none
// ==/UserScript==

const debug = false;
var shit;

function log(log) {
    if (!debug) {
        console.log(log);
    }
}

var omMutate = function(mutationsList) {
    shit = document.querySelector("#im_dialogs > ul");
    if (shit == null || shit.style.display == 'none') return;
    log(mutationsList);

    for (var i=0; i < mutationsList.length; i++) {
        var addedNodes = mutationsList[i].addedNodes[0];
        if (addedNodes) {
            var attr = addedNodes.getAttribute('data-list-id');
            if (attr) {
                shit.style.display = 'none';
                log("shit noned mutateble");
            }
        }
    }
}

function doSmth() {
    shit = document.querySelector("#im_dialogs > ul");
    var container = document.querySelector("body");

    var observer = new MutationObserver(omMutate);
    observer.observe(container, { attributes: true, childList: true, subtree: true, characterData: true,
    characterDataOldValue: true });
    shit.style.display = 'none';
    log("shit noned");
}


function ready(fn) {
    document.addEventListener('page:load', fn);
    document.addEventListener('turbolinks:load', fn);

    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(doSmth);
