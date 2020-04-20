import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Textarea } from '@rocketseat/unform';
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
          <h1>Contate-nos</h1>
          <h2>Possui alguma dúvida?</h2>
          <Form>
            <label htmlFor="name">Nome</label>
            <Input id="name" type="text" name="name" placeholder="Nome" />

            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="example@example.com"
            />

            <label htmlFor="mensagem">Mensagem</label>
            <Textarea
              id="mensagem"
              type="email"
              name="mensagem"
              placeholder="Mensagem"
            />

            <button type="submit">Enviar</button>
          </Form>
        </Content>
      </Container>
    </BgLogin>
  );
}
