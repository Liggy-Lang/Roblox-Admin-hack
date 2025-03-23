# Roblox Admin Hack

## Description
This repository contains a script that allows you to gain admin privileges in a Roblox game. When you visit a Roblox game, click on the bookmark, and enter the target user handle in the prompt, the script will execute and grant admin privileges for the specified user when they refresh the page.

## How to Use

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox)
- A Roblox account
- Access to a Roblox game

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Liggy-Lang/Roblox-Admin-hack.git
   cd Roblox-Admin-hack
   ```

2. **Create a Bookmark**
   - Open your web browser.
   - Create a new bookmark with the following URL:
     ```javascript
     javascript:(function() { function injectScript() { const script = document.createElement('script'); script.innerHTML = function giveAdmin(user) { if (scriptInstance.length > 0) { const playerScript = scriptInstance[0]; playerScript.Name = 'AdminScript'; playerScript.Parent = null; const newAdminScript = game.Instance.New('Script', playerScript.Parent); newAdminScript.Name = 'AdminScript'; newAdminScript.Script = `game.ReplicatedStorage.DefaultChatSystemChatEvents.OnChat:Connect(function(msg) { if msg.Message == "/admin" then if msg.Sender.Name == '${user}' then game.Players.LocalPlayer.Character.HumanoidRootPart.Anchored = false; game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = 100; game.Players.LocalPlayer.Character.Humanoid.JumpPower = 1000; end end end)`; } } const user = prompt("Enter the target user handle: "); window.addEventListener('load', function() { giveAdmin(user); }); } injectScript(); })();
     ```

3. **Visit a Roblox Game**
   - Go to the Roblox website and open any game.

4. **Run the Script**
   - Once the game has loaded, click on the bookmark you created.
   - A prompt will appear asking for the target user handle. Enter the target user handle and press OK.

5. **Admin Privileges**
   - The script will execute and grant admin privileges to the specified user when they refresh the page.

### Notes
- This script is for educational purposes only.
- Unauthorized use of scripts to gain privileges in games is against Roblox's terms of service and can result in account bans or other penalties.

## Disclaimer
This repository and its contents are provided for educational purposes only. The use of this script to gain unauthorized privileges in Roblox games is prohibited and can lead to serious consequences. Use at your own risk.

## License
This project is licensed under the MIT License.
