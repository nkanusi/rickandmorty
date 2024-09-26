import logo from './logo.svg';
import Card from 'react-bootstrap/Card';


import './App.css';
import { useState, useEffect } from "react";

const url = "https://rickandmortyapi.com/api/character";

function App() {
  const [character, setCharacter] = useState([]);


  const fetchData = async () => {

    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setCharacter(data.results);
  };

useEffect( () => {
fetchData();
}, []);

const data = Object.values(character);
  return (
    <div className="App">
    
     {data.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt="Avatar" ></img>
              <ul>{item.name}</ul>
              <ul>{item.species}</ul>
              <ul>{item.gender}</ul>
              <ul>{item.status}</ul>
              <ul>{item.created}</ul>
             
            </div>
                  
    ))}
      
   

  
   
      
    </div>
  );
}

export default App;
