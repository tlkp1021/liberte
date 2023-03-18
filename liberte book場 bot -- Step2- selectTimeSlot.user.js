// ==UserScript==
// @name         liberte book場 bot -- Step2: selectTimeSlot
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

waitForKeyElements ('a[onclick*="07:00-08:00\'\,\'2023-03-27"]', selectTimeSlot);

function selectTimeSlot () {
//////// Mouse Over & Click the target time-slot!

    setTimeout(() => {
        // Select the element
        const element1 = document.querySelector('a[onclick*="07:00-08:00\'\,\'2023-03-27"]');
        console.log(element1);
        const element2 = document.querySelector('a[onclick*="08:00-09:00\'\,\'2023-03-27"]');
        console.log(element2);

        // Create a new mouse event
        //const mouseEvent = new MouseEvent('mouseover', {
        //    view: window,
        //    bubbles: true,
        //   cancelable: true
        //});
        const mouseEvent = new MouseEvent('mouseover', {
            // view: window,
            bubbles: true,
            cancelable: true
        });
        // Dispatch the mouseover event on the element
        if (element1) {
            element1.dispatchEvent(mouseEvent);
            console.log('dispatch1');
        }
        if (element2) {
            element2.dispatchEvent(mouseEvent);
            console.log('dispatch2');
        }

        // Wait for the mouseover event to complete, then click the element
        setTimeout(() => {
            if (element1) {
                element1.click();
            }
            if (element2) {
                element2.click();
            }
            document.getElementById('chkAgress').click()

        }, 500); // Change the delay time (in milliseconds) as needed
        setTimeout(() => {document.querySelector('a[onclick*="javascript:submitForm()"]').click()},2000);

    },500);
};