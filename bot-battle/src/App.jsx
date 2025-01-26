import { useState, useEffect } from 'react';

function App() {
  /************************************/
  const [bots, setBots] = useState([]);
  /************************************/
  


  // Fetch data from the server on component mount
  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => {
      setBots(data);
        console.log(data); // log the data to the console
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
console.log(bots)


  return (
    <>
      <YourBotArmy bots={bots}/>
    </>
  );
}

export default App;

