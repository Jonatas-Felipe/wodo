import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import Logo from '~/assets/logo-wodo.svg';

import { Container, MenuItem } from './styles';

export default function Header() {
  const signed = useSelector(state => state.auth.signed);
  const location = useLocation();
  const dispatch = useDispatch();

  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(location.pathname.substring(1));
  }, [location.pathname]);

  function handleSignOut() {
    dispatch(signOut());
  }

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
          {signed ? (
            <>
              <MenuItem>
                <button type="button" onClick={handleSignOut}>
                  Sair
                </button>
              </MenuItem>
              <MenuItem perfil>
                <Link to="/perfil">
                  <img
                    src="https://api.adorable.io/avatars/70/abott@adorable.png"
                    alt="Avatar"
                  />
                </Link>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem active={url === 'contato'}>
                <Link to="/contato">Contato</Link>
              </MenuItem>
              <MenuItem active={url === 'login' || url === 'cadastrar'}>
                <Link to="/login">Login</Link>
              </MenuItem>
            </>
          )}
        </ul>
      </div>
    </Container>
  );
}
