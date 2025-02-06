javascript:(function() { function injectScript() { const script = document.createElement('script'); script.innerHTML = function giveAdmin(user) { // Find the Game script and replace its instance of 'Player.PlayerScript' with 'AdminScript' const gameScript = game.GetService('Script'); const scriptInstance = gameScript.GetChildrenByName('PlayerScript');
  if (scriptInstance.length > 0) {
    const playerScript = scriptInstance[0];
    playerScript.Name = 'AdminScript';
    playerScript.Parent = null;

    // Create a new instance of AdminScript
    const newAdminScript = game.Instance.New('Script', playerScript.Parent);
    newAdminScript.Name = 'AdminScript';
    newAdminScript.Script = `
      game.ReplicatedStorage.DefaultChatSystemChatEvents.OnChat:Connect(function(msg)
        if msg.Message == "/admin" then
          if msg.Sender.Name == '${user}' then
            game.Players.LocalPlayer.Character.HumanoidRootPart.Anchored = false
            game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = 100
            game.Players.LocalPlayer.Character.Humanoid.JumpPower = 1000
          end
        end
      end)
    `;
  }
}

// Wait for the Roblox game to load, then execute the function with the user handle as input
const user = prompt("Enter the target user handle: ");
window.addEventListener('load', function() {
  giveAdmin(user);
});
}
injectScript(); })();`
