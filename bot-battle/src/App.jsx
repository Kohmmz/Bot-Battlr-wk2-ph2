//The root component responsible for managing the state for all bots and the user's army.
// Fetches data from the server and passes it to child components.
import { useState, useEffect } from "react";
import BotCollection from "./BotColloection";
import YourBotArmy from "./YourBotArmy";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";



function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        setBots(data);
        console.log(data); // Log the fetched data to the console
      })
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  // Add a bot to the user's army
  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Discharge a bot from the user's army
  const dischargeBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Permanently remove a bot from the server and UI
  const removeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmy(army.filter((b) => b.id !== bot.id));
      })
      .catch((error) => console.error("Error removing bot:", error));
  };
//Navigation links to BotCollection and YourBotArmy components
  return (
    <Router>
      <nav>
        <Link to="/">Bot Collection</Link> | <Link to="/army">Your Bot Army</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<BotCollection bots={bots} enlistBot={enlistBot} />}
        />
        <Route
          path="/army"
          element={
            <YourBotArmy
              army={army}
              dischargeBot={dischargeBot}
              removeBot={removeBot}
            />
          }
        />
      </Routes>
    </Router>
  );
}


export default App;
