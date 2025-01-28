//display the users enlised bots
//each bot in the army is rendered using Botcard component
// handlers relesing  a bot from array
import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({ army, dischargeBot, removeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
           handleClick={() => dischargeBot(bot)} // Release the bot
            handleDischarge={() => removeBot(bot)} // Permanently delete the bot
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
