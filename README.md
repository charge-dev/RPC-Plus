# RPC Plus

RPC Plus is a free and open-source tool that lets you personalize your Discord Rich Presence effortlessly. You can customize your presence without any coding required.

---

## Features
> Full RPC customization<br>
> No coding required<br>
> User-Friendly

---

## Instructions

### Setting up Application

1. **Create the Application**
   > Go to the [Discord Developer Portal](https://discord.com/developers/applications).<br>
   > Create a new application.<br>
   > Name your app based on your desired RPC name.<br>
2. **Upload Assets**
   > Go to your application.<br>
   > Go to Rich Presence using the sidebar.<br>
   > Click on Add Image(s) and select your image.
3. **Connect the Application**
   > Go to your application.<br>
   > Go to OAuth2 using the sidebar.<br>
   > Copy the Client ID.<br>
   > Open the `config.json` file located in the `src` folder.<br>
   > Replace `CLIENT_ID` with the copied Client ID.<br>
   > Replace `LARGE_IMAGE_KEY` or `SMALL_IMAGE_KEY` with your asset name.

### Installation

To install RPC Plus, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/charge-dev/rpc-plus.git
   ```
2. **Remove Unnecessary Files**
   > Move all files/folders outside the `rpc-plus` folder.<br>
   > Delete the `rpc-plus` folder.
3. **Install Dependencies**
   ```bash
   npm init
   ```
   ```bash
   discord-rpc
   ```
4. **Configure RPC Plus**
   > Open the `config.json` file located in the `src` folder.<br>
   > Customize the Discord Rich Presence settings according to your preferences.
5. **Run the Application**
   ```bash
   node .
   ```
   or
   ```bash
   npm run rpc
   ```
6. **Verify Installation**<br>
   Open Discord and check your Discord Rich Presence to verify that RPC Plus is running correctly. You should see the presence reflecting the configuration specified in the `config.json` file.
