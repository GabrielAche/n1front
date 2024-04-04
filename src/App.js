import React from 'react';
import './App.css';
import logo from './imagem/bindlogo.png';
import video from './video/noob.mp4';

function App() {
  return (
    <div className="App">
      <header className="header">
      <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="menu">
            <li><a href="#section1">Botão 1</a></li>
            <li><a href="#section2">Botão 2</a></li>
            <li><a href="#section3">Botão 3</a></li>
          </ul>
        </nav>
      </header>
      <section id="section1" className="section">
        <div className="video-container">
          <video className="video" controls>
            <source src={video} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </section>
    </div>
  );
}

export default App;
