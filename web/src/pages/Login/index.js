import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { IoMdEye } from 'react-icons/io';

import { BgLogin, Container, Content } from './styles';

export default function Login() {
  const [typePassword, setTypePassword] = useState('password');

  function handleClick() {
    setTypePassword(typePassword === 'password' ? 'text' : 'password');
  }

  return (
    <BgLogin>
      <Container>
        <Content>
          <h1>Bem-Vindo(a) ao Wodo</h1>
          <h2>Login</h2>
          <Form>
            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="example@example.com"
            />
            <label htmlFor="password">Senha</label>
            <label htmlFor="password">
              <Input
                id="password"
                type={typePassword}
                name="password"
                placeholder="******"
              />
              <button type="button" onClick={handleClick}>
                <IoMdEye size={25} color="#C6CBD4" />
              </button>
            </label>
            <Link>Esqueceu a senha?</Link>
            <button type="submit">Entrar</button>
            <div>
              <p>Não tem uma conta?</p>
              <Link to="/cadastrar">Cadastre-se</Link>
            </div>
          </Form>
        </Content>
      </Container>
    </BgLogin>
  );
}
