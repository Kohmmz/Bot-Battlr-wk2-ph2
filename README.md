Bot Army Management App

Overview

The Bot Army Management App is a simple and engaging React application that allows users to manage a collection of bots and create their personalized bot army. Users can view available bots fetched from a local server, enlist bots into their army, discharge bots, and permanently delete them from the collection.

Features

Bot Collection

Displays a list of bots fetched from the server.

Each bot card includes the bot's name, image, and stats.

Enlist Bots

Users can click the "Enlist" button to add a bot to their army.

Your Bot Army

Displays bots enlisted by the user.

Users can manage their army by discharging bots or permanently deleting them.

Discharge Bots

Users can remove a bot from their army.

Delete Bots

Permanently removes a bot from the server and the UI.

Components

App

Root component that manages the state for all bots and the user’s army.

Handles:

Fetching bot data from the server.

Logic for enlisting, discharging, and deleting bots.

BotCard

Displays a card with the bot’s name, image, and stats.

Includes two action buttons:

Enlist: Adds the bot to the user's army.

Discharge: Permanently deletes the bot from the server and UI.

BotCollection

Displays a list of available bots.

Renders each bot using the BotCard component.

YourBotArmy

Displays the user’s enlisted bots.

Renders each bot in the army using the BotCard component.

Provides handlers for:

Releasing a bot from the army.

Permanently deleting a bot.

Installation

1. Clone the Repository

git clone https://github.com/Kohmmz/Bot-Battlr-wk2-ph2.git
cd bot-army-management

2. Install Dependencies

npm install

3. Start the Development Server

npm start

4. Open the App

Visit http://localhost:3000 in your browser.

Usage

Home Page

View the list of available bots.

Click the Enlist button to add a bot to your army.

Your Bot Army Page

View your enlisted bots.

Options available:

Discharge: Remove a bot from your army.

Delete: Permanently remove a bot from both the server and UI.

API Endpoint

Ensure the local server is running and accessible at:

http://localhost:3000/bots

Dependencies

React

React Router DOM

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a feature branch (git checkout -b feature/your-feature-name).

Commit your changes (git commit -m 'Add your feature').

Push to the branch (git push origin feature/your-feature-name).

Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Happy bot managing!

