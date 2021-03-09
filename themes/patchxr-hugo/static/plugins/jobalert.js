/* Bootstrap Job Alert Dismiss Cookie - patchxr.com
 * by dan@1xn.org
 * based on:
 * Bootstrap Cookie Alert by Wruczek
 * https://github.com/Wruczek/Bootstrap-Cookie-Alert
 * Released under MIT license
 */
(function () {
    "use strict";

    var jobAlert = document.querySelector(".jobalert");
    var dismissJob = document.querySelector(".dismissjob");

    if (!jobAlert) {
       return;
    }

    jobAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

    // Show the alert if we cant find the "dismissJob" cookie
    if (!getCookie("dismissJob")) {
        jobAlert.classList.add("show");
    }

    // When clicking on the agree button, create a 1 year
    // cookie to remember user's choice and close the banner
    dismissJob.addEventListener("click", function () {
        setCookie("dismissJob", true, 365);
        jobAlert.classList.remove("show");

        // dispatch the accept event
        window.dispatchEvent(new Event("jobAlertDismiss"))
    });

    // Cookie functions from w3schools
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();
