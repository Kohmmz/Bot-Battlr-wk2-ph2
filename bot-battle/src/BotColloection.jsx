//Display a list of available bots
// show only available bots not enlisted
// each bot is rendered using the botcard component
import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <div className="card-container">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={() => enlistBot(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;