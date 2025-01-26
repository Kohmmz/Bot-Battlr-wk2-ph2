//The root component responsible for managing the state for all bots and the user's army.
// Fetches data from the server and passes it to child components.
import { useState, useEffect } from 'react';

function App() {
  // all bots fetched from the server
  // array of enlisted bot
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch data from the server on component mount
  // passes to bots state
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        setBots(data);
        console.log(data); // Log the fetched data to the console
      })
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);


  // Add a bot to the user's army
  const enlistBot = (bot) => {
    if(!army.find((b)=> b.id === bot.id)){
      setArmy([...army, bot]);
    }}
};

// discharge a bot from the user's army
const dischargeBot = (bot) => {
  setArmy(army.filter((b) => b.id !== bot.id));
}

// Remove from the server
const removebot = (bot) => {
  fetch(`http://localhost:3000/bots/${bot.id}`, {
    method: 'DELETE',
  })
 .then(()=>{
  setBots(bots.filter((b) => b.id !== bot.id))
  setArmy(army.filter((b) => b.id !== bot.id))
})
.catch((error) => console.error('Error removing bot:', error));
}


// Render components
return (
  <div className="App">
    <YourBotArmy army={army} dischargeBot={dischargeBot} removeBot={removeBot} />
    <BotCollection bots={bots} enlistBot={enlistBot} />
  </div>
);
}



export default App;

