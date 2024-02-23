// Import required modules
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });
const fs = require('fs');

// Read configuration from config.json file
const config = JSON.parse(fs.readFileSync('src/config.json', 'utf8'));

// Extract client ID from config.json
const clientId = config.general.clientId;

// Register the application with Discord using the provided client ID
DiscordRPC.register(clientId);

// Function to set the Discord Rich Presence activity
async function setActivity() {
    if (!RPC) return;

    // Set the Discord Rich Presence activity using data from config.json
    RPC.setActivity({
        details: config.activity.data.details,
        state: config.activity.data.state,
        startTimestamp: Date.now(),
        largeImageKey: config.activity.data.largeImage,
        largeImageText: config.activity.data.largeImageText,
        smallImageKey: config.activity.data.smallImage,
        smallImageText: config.activity.data.smallImageText,
        instance: config.activity.data.instance === "true",
        buttons: [
            {
                label: config.activity.data.buttons.button1.label,
                url: config.activity.data.buttons.button1.url
            },
            {
                label: config.activity.data.buttons.button2.label,
                url: config.activity.data.buttons.button2.url
            }
        ]
    });
};

// Event listener for when the RPC client is ready
RPC.on('ready', async () => {
    console.clear();
    console.log('RPC Plus is running.');
    setActivity();
});

// Log in to Discord using the provided client ID
RPC.login({ clientId }).catch(err => console.error(err));
