import React, { useState } from 'react';
import './App.css';
import GalletaFortuna from './components/GalletaFortuna'

import fondo1 from '/fondo1.png';
import fondo2 from '/fondo2.png';
import fondo3 from '/fondo3.png';
import fondo4 from '/fondo4.jpg';

const fortunes = [
  {
    phrase: "Una reputación de mil años puede depender de la conducta de una hora.",
    author: "Proverbio Japonés"
  },
  {
    phrase: "Lo que sospechabas es verdad, procura ser amable con ellos, pues esta bondad ayudará a que todo mejore.",
    author: "proverbia.net"
  },
  {
    phrase: "Alégrate, un camino de hermosas pasiones te espera y debes transitarlo.",
    author: "ajescudero"
  },
  {
    phrase: "No todo el mundo puede recibir las mismas cosas. Sé práctico.",
    author: "ajescudero"
  }
];

const getRandomFortune = () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
};

function App() {
  const [fortune, setFortune] = useState(getRandomFortune());
  const [currentImage, setCurrentImage] = useState(fondo1);

  const changeFortune = () => {
    const randomFortune = getRandomFortune();
    setFortune(randomFortune);
    setCurrentImage(getRandomImage());
  };

  const getRandomImage = () => {
    const images = [fondo1, fondo2, fondo3, fondo4];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (

    <div className="app">

      <h1>Galleta de la Fortuna</h1>


      <img src={currentImage} alt="Imagen" />

      <div className="fortune-container">

        <p className="fortune">{fortune.phrase}</p>

        <p className="author">- {fortune.author}</p>

      </div>

      <button className="button" onClick={changeFortune}>

        Probar fortuna

      </button>

    </div>
  );
}

export default App;
