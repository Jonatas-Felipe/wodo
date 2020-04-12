import React from 'react';

import LogoFooter from '~/assets/logo-wodo-footer.svg';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div>
        <img src={LogoFooter} alt="Logo Wodo" />
        <ul>
          <li>Sobre a Wodo</li>
          <li>Fale conosco</li>
          <li>Condições gerais</li>
        </ul>
      </div>
    </Container>
  );
}
