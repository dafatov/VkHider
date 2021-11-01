// ==UserScript==
// @name         VkHider
// @namespace    http://vk.com/
// @version      1.1
// @description  Delete shit from vk.com
// @author       dafatov
// @match        https://vk.com/im*
// @match        http://vk.com/im*
// @license      MIT
// @grant        none
// ==/UserScript==

const debug = false;
let shit;

function log(log) {
    if (!debug) {
        console.log(log);
    }
}

let omMutate = function(mutationsList) {
    shit = document.querySelector("#im_dialogs > ul");
    if (shit == null || shit.style.display == 'none') return;
    log(mutationsList);

    for (let i=0; i < mutationsList.length; i++) {
        let addedNodes = mutationsList[i].addedNodes[0];
        if (addedNodes) {
            let attr = addedNodes.getAttribute('data-list-id');
            if (attr) {
                shit.style.display = 'none';
                log("shit noned mutateble");
            }
        }
    }
}

function doSmth() {
    shit = document.querySelector("#im_dialogs > ul");
    let container = document.querySelector("body");

    let observer = new MutationObserver(omMutate);
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
