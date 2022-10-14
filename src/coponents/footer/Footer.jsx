import React from 'react';
import './footer.scss';

const Footer = () => (
  <footer>
    <div className="top" data-testid="footer">
      Designed By
      {' '}
      <a href="https://github.com/melashu" target="_blank" rel="noreferrer">
        Meshu Amare
      </a>
      {' '}
    </div>
    <div className="bottom">Copywrite &copy; 2022;</div>
  </footer>
);

export default Footer;
