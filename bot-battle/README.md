Bot Army Management App
This is a simple React application that allows users to manage a collection of bots and create their own bot army. The app fetches bot data from a local server, displays available bots, and lets users enlist bots into their army. Users can also discharge bots from their army or permanently remove them from the collection.

Features
Bot Collection: Displays a list of available bots fetched from the server.

Enlist Bots: Users can add bots to their army by clicking the "Enlist" button.

Your Bot Army: Displays the list of bots enlisted by the user.

Discharge Bots: Users can remove bots from their army.

Delete Bots: Users can permanently delete bots from the server and the UI.

Components
App
The root component that manages the state for all bots and the user's army.

Fetches bot data from the server and passes it to child components.

Handles the logic for enlisting, discharging, and deleting bots.

BotCard
Displays a card with the bot's name, image, and stats.

Includes two buttons:

Enlist: Adds the bot to the user's army.

Discharge: Permanently deletes the bot from the server and UI.

BotCollection
Displays a list of available bots.

Each bot is rendered using the BotCard component.

YourBotArmy
Displays the user's enlisted bots.

Each bot in the army is rendered using the BotCard component.

Handlers for releasing a bot from the army or permanently deleting it.

Installation
Clone the repository:

bash
Copy
git clone https://github.com/Kohmmz/Bot-Battlr-wk2-ph2.git
cd bot-army-management
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
Open your browser and navigate to http://localhost:3000 to view the app.

Usage
Home Page: Displays the list of available bots. Click the "Enlist" button to add a bot to your army.

Your Bot Army: Navigate to the "Your Bot Army" page to view your enlisted bots. You can discharge a bot from your army or permanently delete it.

API Endpoint
The app fetches bot data from a local server running at http://localhost:3000/bots. Ensure that the server is running and accessible.

Dependencies
React

React Router DOM

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.