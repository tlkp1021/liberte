// ==UserScript==
// @name         liberte book場 bot -- Step1: Pick Week
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Let's fuck liberte!
// @author       TommyLo
// @match        http://www.liberte.com.hk/ecommunity/index_1.php?view=booking&action=view&special=booking_advance
// @icon         https://www.google.com/s2/favicons?sz=64&domain=liberte.com.hk
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_log
// ==/UserScript==

(function() {
    'use strict';

    //////// Check Time-slot available, Otherwise Refresh
    // Refresh the page every 5 seconds until a condition is true
    let intervalId = setInterval(() => {
        // Select the select element
        let not_done = true;
        const targetDate = '27-03-2023';
        const dateSelectElement = document.querySelector('select.td_content');
        // Check the condition
        console.log(dateSelectElement);
        console.log(dateSelectElement.options[dateSelectElement.options.length - 1]);
        if (dateSelectElement.options[dateSelectElement.options.length - 1].text === targetDate && not_done) {
            clearInterval(intervalId);
            console.log('clearInterval');
            not_done = false;
        } else {
            location.reload();
            console.log('reload...');
        }
    }, 5000); // 1000 milliseconds = 1 seconds

    //////// Select Court 2
    setTimeout(() => {
        document.querySelector('tbody a img[alt="羽毛球場 2"]').click()
    },500);

    //////// Select Latest Date
    setTimeout(() => {
        const dateSelectElement = document.querySelector('select.td_content');
        const option = dateSelectElement.options[dateSelectElement.options.length - 1];
        // If the option's text matches the option you want to select, select it
        option.selected = true;
        dateSelectElement.dispatchEvent(new Event('change'));
    },500);



})();
