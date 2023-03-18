// ==UserScript==
// @name         liberte book場 bot -- Step3: confirmBooking
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Let's fuck liberte!
// @author       TommyLo
// @match        http://www.liberte.com.hk/ecommunity/index_1.php?view=booking&action=view&special=booking_advance
// @icon         https://www.google.com/s2/favicons?sz=64&domain=liberte.com.hk
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_log
// ==/UserScript==


'use strict';
//let target = "//font[text()='預定設施：確定預定']" ;
//let keyElement = document.evaluate(target, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

waitForKeyElements(':contains("預定設施：確定預定")', confirmBooking);

function confirmBooking () {
    'use strict';
    console.log('click confirm booking');
    // Your code here...
    setTimeout(() => {document.querySelector('a[onclick*="reloadForm("]').click()},500);
};