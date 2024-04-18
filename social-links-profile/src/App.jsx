import React, { useEffect, useState } from "react";
import Card from "./components/Card.jsx";

function NumerosAleatorios() {
  const numeros = [];
  for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 857)); 
  }
  numeros.toString();
  return numeros;
}

function App() {
  const [characters, setcharacters] = useState([])
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + NumerosAleatorios())
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setcharacters(data)
        console.log(data)
      });
  
  }, [])

  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
