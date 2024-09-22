import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Loja de Cervejas. Todos os direitos reservados.</p>
      <p>Contate-nos: contato@lojadecervejas.com</p>
      <div className="socials">
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;

