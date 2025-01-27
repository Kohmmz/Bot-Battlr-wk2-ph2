// Display a card with the bot's name, image, and stats//-
//inclde two buttons enlist to add the bot to your army//-
// discharge (red x) to permanently delete the bot//-
import React from "react";

function BotCard({ bot, handleClick, handleDischarge }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>
        <strong>Class:</strong> {bot.bot_class}
      </p>
      <p>
        <strong>Health:</strong> {bot.health} <br />
        <strong>Damage:</strong> {bot.damage} <br />
        <strong>Armor:</strong> {bot.armor}
      </p>
      <button onClick={handleClick} aria-label="Enlist Bot">Enlist</button>
      {handleDischarge && (
        <button
          onClick={handleDischarge}
          style={{ color: "red" }}
          aria-label="Discharge Bot"
        >
          x
        </button>
      )}
    </div>
  );
}

export default BotCard;
