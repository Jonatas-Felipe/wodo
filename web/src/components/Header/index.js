import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '~/assets/logo-wodo.svg';

import { Container, MenuItem } from './styles';

export default function Header() {
  const location = useLocation();

  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(location.pathname.substring(1));
  }, [location.pathname]);

  return (
    <Container>
      <div>
        <img src={Logo} alt="Logo do Wodo" />
        <ul>
          <MenuItem active={url === ''}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem active={url === 'servicos'}>
            <Link to="/servicos">Serviços</Link>
          </MenuItem>
          <MenuItem active={url === 'contato'}>
            <Link to="/contato">Contato</Link>
          </MenuItem>
          <MenuItem active={url === 'login' || url === 'cadastrar'}>
            <Link to="/login">Login</Link>
          </MenuItem>
        </ul>
      </div>
    </Container>
  );
}
