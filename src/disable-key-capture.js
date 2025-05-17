// ==UserScript==
// @name           Disable key capture
// @description    Stop websites from highjacking keyboard shortcuts
// @version        0.0.1
//
// @run-at         document-start
// @include        *
// @exclude        *.google.*
// @exclude        https://fbe.teoxoy.com/*
// @grant          none
// ==/UserScript==

const keys = ['s', 't', 'w', 'l'];

// isTrusted -> userAgent
// metaKey, ctrlKey, shiftKey, altKey,

document.addEventListener('keydown', event => {

    if (
        (keys.indexOf(event.key) !== -1 && event.metaKey)
        || event.key === 'Escape'
    ) {
        event.cancelBubble = true;
        event.stopImmediatePropagation();

        console.log(`Prevent capture of "${event.key}", gotcha!`);
    }

    return false;

}, true);

document.addEventListener('click', event => {
    if (event.metaKey) {
        event.cancelBubble = true;
        event.stopImmediatePropagation();

        console.log(`Prevent capture of Command click, gotcha!`);
    }

}, true);
