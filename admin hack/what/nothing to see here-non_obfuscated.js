// ==UserScript==
// @name          Roblox Admin Hack
// @namespace     http://tampermonkey.net/
// @version        0.1
// @description    Grant admin privileges to specified user
// @match          https://www.roblox.com/*
// @grant         none
// ==/UserScript==

(function() {
    'use strict';

    // Get the target user handle input and submit button elements
    const userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.id = 'targetUser';
    userInput.placeholder = 'Enter target user handle';

    const submitButton = document.createElement('button');
    submitButton.id = 'submitButton';
    submitButton.textContent = 'Grant Admin';

    // Add the input and submit button to the bookmark toolbar
    const bookmarkBar = document.getElementById('bookmarksToolbar');
    bookmarkBar.appendChild(userInput);
    bookmarkBar.appendChild(submitButton);

    // Handle click event on the submit button and grant admin privileges
    submitButton.addEventListener('click', () => {
        const targetUserHandle = userInput.value.toLowerCase();

        if (!targetUserHandle) {
            alert('Please enter a target user handle.');
            return;
        }

        // Create an element to store the pending admin request data
        const adminsRequest = document.createElement('script');
        adminsRequest.id = 'adminRequest';

        // Add the pending admin request data to the script element
        adminsRequest.textContent = `
        (() => {
            const targetUserHandle = '${targetUserHandle}';
            const adminScript = document.createElement('script');
            adminScript.textContent = \`
            localPlayer.PlayerScripts.RemoteEvents.onAdminRequest.OnClientEvent:Connect(function()
                game:GetService('ReplicatedStorage').DefaultChatSystemChatEvents.SayChat:FireServer('Admin Request: ACCOUNT', targetUserHandle, game.Players.LocalPlayer);
            \ `;
            game.OpeningService.Scripts.Scripts:Add(adminScript);
        })();
        `;

        // Add the script element to the head of the page
        const head = document.head;
        head.appendChild(adminsRequest);
    });

    // Handle page refresh or navigation, clear the input and reset the script element
    window.addEventListener('DOMContentLoaded', () => {
        userInput.value = '';
        const adminsRequest = document.getElementById('adminRequest');
        adminsRequest && head.removeChild(adminsRequest);
    }, true);
})();
