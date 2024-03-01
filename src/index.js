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

    // Initialize image variables with default values
    let largeImageKey = 'none';
    let largeImageText = 'none';
    let smallImageKey = 'none';
    let smallImageText = 'none';

    // Check if large image is enabled
    if (config.activity.data.images.largeImage.enabled === "true") {
        largeImageKey = config.activity.data.images.largeImage.largeImageKey;
        largeImageText = config.activity.data.images.largeImage.largeImageText;
    }

    // Check if small image is enabled
    if (config.activity.data.images.smallImage.enabled === "true") {
        smallImageKey = config.activity.data.images.smallImage.smallImageKey;
        smallImageText = config.activity.data.images.smallImage.smallImageText;
    }

    // Define button variables
    let buttons = [];

    // Check if button 1 is enabled
    if (config.activity.data.buttons.button1.enabled === "true") {
        buttons.push({
            label: config.activity.data.buttons.button1.label,
            url: config.activity.data.buttons.button1.url
        });
    }

    // Check if button 2 is enabled
    if (config.activity.data.buttons.button2.enabled === "true") {
        buttons.push({
            label: config.activity.data.buttons.button2.label,
            url: config.activity.data.buttons.button2.url
        });
    }

    // Set the Discord Rich Presence activity
    RPC.setActivity({
        details: config.activity.data.details,
        state: config.activity.data.state,
        startTimestamp: Date.now(),
        largeImageKey: largeImageKey,
        largeImageText: largeImageText,
        smallImageKey: smallImageKey,
        smallImageText: smallImageText,
        instance: config.activity.data.instance === "true",
        buttons: buttons
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
