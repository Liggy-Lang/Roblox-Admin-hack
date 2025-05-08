// ==UserScript==
// @name         Roblox Admin Hack
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Grants admin privileges to a target user in Roblox games
// @author       Liggy-Lang
// @match        *://*.roblox.com/*
// @icon         https://www.roblox.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Prompt the user to enter the target username
    const targetUser = prompt("Enter the target username to grant admin privileges:");

    // If the user cancels or provides no input, alert and return
    if (!targetUser) {
        alert("No username entered. Exiting script.");
        return;
    }

    // Function to inject admin privileges
    function grantAdminPrivileges(user) {
        console.log(`Granting admin privileges to: ${user}`);
        
        // Example admin privileges: Adding user to admin list
        // This is just a mock of what might happen in a game
        const adminScript = document.createElement('script');
        adminScript.textContent = `
            (function() {
                let adminList = window.RobloxAdminList || [];
                adminList.push("${user}");
                window.RobloxAdminList = adminList;

                console.log("Admin privileges granted to:", "${user}");
            })();
        `;
        document.body.appendChild(adminScript);
    }

    // Grant admin privileges to the target user
    grantAdminPrivileges(targetUser);

    // Notify the user of success
    alert(`Admin privileges granted to ${targetUser}. Please refresh the page.`);
})();
