import React from 'react';
import './App.css';
import logo from './imagem/bindlogo.png';
import video from './video/noob.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';

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

      <section className='card-bindit'>
        <div className='card-info'>
          <span>
            Venha conhecer o Bind.it!
          </span>
        </div>
      </section>

      <section id="section" className="section">
        <div className="video-container">
          <video className="video" controls>
            <source src={video} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </section>

      <section className='contact-area'>
        <div className='contact-text' id='section1'>
          <h2>Um pouco sobre nós</h2>
          <span>
            Somos uma empresa formada com base na necessidade da criação de grupos voltado
            para a area de e-sports, buscamos sempre evoluir nossos produtos e oferecer um 
            suporte de qualidade se precisar de algo nao exite em nos contatar
          </span>
        </div>

        <div className='form_contato'>
          <h2>Contato</h2>
          <form>
            <div class="info-user">
              <input type="text" name="name" class="text-box" placeholder="Seu Nome" required />
              <input type="email" name="email" class="text-box" placeholder="Seu Email" required />
            </div>
            <textarea name="mensagem" rows="5" placeholder="Sua Mensagem" required />
            <input type="submit" name="submit" class="send-btn" value="Enviar" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
