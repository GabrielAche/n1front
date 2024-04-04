import React from 'react';
import './App.css';
import logo from './imagem/bindlogo.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <div className="menu-left">
            <a href="#section1">Sobre nós</a>
            <a href="#section2">Visão</a>
          </div>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="menu-right">
            <a href="#section3">Entrar</a>
            <button className="cadastro no-progress">Cadastre-se</button>
          </div>
        </nav>
      </header>
      <section id="section1" className="section">
        <div className="video-container">
          {/* Aqui você pode inserir o código para o vídeo */}
        </div>
      </section>
    </div>
  );
}

export default App;
