import React, {useState, useEffect} from "react";
import DogName from './DogName'

function App() {

  const [dogs, setDogs] = useState([])

  useEffect(() => {
      fetch("http://localhost:3001/pups")
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
          setDogs(data)
      })
  }, [])

  console.log(dogs)

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">{dogs.map(dog =><DogName key={dog.id} name={dog.name}/>)}</div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;
