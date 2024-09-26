import logo from './logo.svg';
import Card from 'react-bootstrap/Card';


import './App.css';
import { useState, useEffect } from "react";

const url = "https://rickandmortyapi.com/api/character";

function App() {
  const [character, setCharacter] = useState([]);
  const [value, setValue] = useState("");


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
function handleChange(e){
setValue(e.target.value);
console.log(value);


}
  return (
    <div className="App">
    <h1 className ="welcome">Welcome</h1>
    <div  className="selectDiv">
    
        Pick Character By Status: 

        <select value={value} onChange={handleChange}>
                <option value={"Dead"}>Dead</option>
                <option value={"Alive"}>Alive</option>
                <option value={"Unknown"}>
                 Unknown
                </option>
            </select>

          

   
   
    </div>
    
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
