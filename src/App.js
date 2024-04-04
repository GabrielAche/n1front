import React from 'react';
import './App.css';
import logo from './imagem/bindlogo.png';

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
          {/* Aqui você pode inserir o código para o vídeo */}
        </div>
      </section>
      <section id="section2" className="section">
        {/* Aqui você pode adicionar ícones e emojis decorativos */}
      </section>
      <section id="section3" className="section">
        <div className="signup-form">
          <h2>Cadastre-se</h2>
          {/* Aqui você pode adicionar o formulário de cadastro */}
        </div>
      </section>
    </div>
  );
}

export default App;
