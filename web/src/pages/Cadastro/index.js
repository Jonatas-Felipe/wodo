import React, { useState } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { IoMdEye } from 'react-icons/io';

import history from '~/services/history';

import {
  BgCadastro,
  Container,
  Content,
  Passo,
  InputGroup,
  ButtonGroup,
} from './styles';

import InputFile from '~/components/InputFile';

export default function Cadastro() {
  const [typePassword, setTypePassword] = useState('password');
  const [passo, setPasso] = useState(1);
  const [passoPrev, setPassoPrev] = useState(1);
  const [passoNext, setPassoNext] = useState(2);
  const [descriptionPasso, setDescriptionPasso] = useState(
    'Faça seu cadastro e tenha acesso a todo conteúdo Wodo'
  );

  function handleClick() {
    setTypePassword(typePassword === 'password' ? 'text' : 'password');
  }

  function handleClickPasso(passoSelected) {
    switch (passoSelected) {
      case 1:
        setPassoNext(2);
        setDescriptionPasso(
          'Faça seu cadastro e tenha acesso a todo conteúdo Wodo'
        );
        break;
      case 2:
        setPassoPrev(1);
        setPassoNext(3);
        setDescriptionPasso('Digite seus dados');
        break;
      case 3:
        setPassoPrev(2);
        setPassoNext(4);
        setDescriptionPasso(
          'Digite seu endereço e encontre serviços próximos de você'
        );
        break;
      case 4:
        setPassoPrev(3);
        setPassoNext(5);
        setDescriptionPasso(
          'Nos informe o seu número, para entrarmos em contato'
        );
        break;
      case 5:
        setPassoPrev(4);
        setDescriptionPasso('Quase lá, finalize seu cadastro');
        break;
      default:
        setPasso(1);
        setPassoNext(2);
        setPassoPrev(1);
        setDescriptionPasso(
          'Faça seu cadastro e tenha acesso a todo conteúdo Wodo'
        );
    }
    setPasso(passoSelected);
  }

  function handleSubmit(data) {
    history.push('servicos');
  }

  const dia = [
    { id: 1, title: '01' },
    { id: 2, title: '02' },
    { id: 3, title: '03' },
    { id: 4, title: '04' },
    { id: 5, title: '05' },
    { id: 6, title: '06' },
    { id: 7, title: '07' },
    { id: 8, title: '08' },
    { id: 9, title: '09' },
    { id: 10, title: '10' },
    { id: 11, title: '11' },
    { id: 12, title: '12' },
    { id: 13, title: '13' },
    { id: 14, title: '14' },
    { id: 15, title: '15' },
    { id: 16, title: '16' },
    { id: 17, title: '17' },
    { id: 18, title: '18' },
    { id: 19, title: '19' },
    { id: 20, title: '20' },
    { id: 21, title: '21' },
    { id: 22, title: '22' },
    { id: 23, title: '23' },
    { id: 24, title: '24' },
    { id: 25, title: '25' },
    { id: 26, title: '26' },
    { id: 27, title: '27' },
    { id: 28, title: '28' },
    { id: 29, title: '29' },
    { id: 30, title: '30' },
    { id: 31, title: '31' },
  ];

  const mes = [
    { id: 1, title: '01' },
    { id: 2, title: '02' },
    { id: 3, title: '03' },
    { id: 4, title: '04' },
    { id: 5, title: '05' },
    { id: 6, title: '06' },
    { id: 7, title: '07' },
    { id: 8, title: '08' },
    { id: 9, title: '09' },
    { id: 10, title: '10' },
    { id: 11, title: '11' },
    { id: 12, title: '12' },
  ];

  const ano = [
    { id: 2001, title: '2001' },
    { id: 2002, title: '2002' },
    { id: 2003, title: '2003' },
    { id: 2004, title: '2004' },
    { id: 2005, title: '2005' },
  ];

  const sexo = [
    { id: 'M', title: 'Masculino' },
    { id: 'F', title: 'Feminino' },
  ];

  return (
    <BgCadastro>
      <Container>
        <Content>
          <h1>Bem-Vindo(a) ao Wodo</h1>
          <h2>{descriptionPasso}</h2>
          <Form onSubmit={handleSubmit}>
            <Passo passo={passo === 1} past={passo < 1}>
              <label htmlFor="name">Nome</label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Nome Completo"
              />
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
            </Passo>
            <Passo passo={passo === 2} past={passo < 2}>
              <label htmlFor="day">Data de nascimento</label>
              <InputGroup fr="1fr 1fr 1fr">
                <Select id="day" name="day" placeholder="Dia" options={dia} />
                <Select
                  id="month"
                  name="month"
                  placeholder="Mês"
                  options={mes}
                />
                <Select id="year" name="year" placeholder="Ano" options={ano} />
              </InputGroup>
              <label htmlFor="sexo">Sexo</label>
              <Select id="sexo" name="sexo" placeholder="Sexo" options={sexo} />
              <label htmlFor="rg">RG</label>
              <Input id="rg" type="text" name="rg" placeholder="xx.xxx.xxx-x" />
              <label htmlFor="cpf">CPF</label>
              <Input
                id="cpf"
                type="text"
                name="cpf"
                placeholder="xxx.xxx.xxx-xx"
              />
            </Passo>
            <Passo passo={passo === 3} past={passo < 3}>
              <label htmlFor="cep">CEP</label>
              <Input id="cep" type="text" name="cep" placeholder="xxxxx-xx" />
              <InputGroup fr="1fr 1fr">
                <label htmlFor="estado">
                  Estado
                  <Input
                    id="estado"
                    type="text"
                    name="estado"
                    placeholder="Estado"
                  />
                </label>

                <label htmlFor="cidade">
                  Cidade
                  <Input
                    id="cidade"
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                  />
                </label>
              </InputGroup>
              <label htmlFor="endereco">Endereço</label>
              <Input
                id="endereco"
                type="text"
                name="endereco"
                placeholder="Endereço"
              />
              <InputGroup fr="2fr 1fr">
                <label htmlFor="bairro">
                  Bairro
                  <Input
                    id="bairro"
                    type="text"
                    name="bairro"
                    placeholder="bairro"
                  />
                </label>

                <label htmlFor="numero">
                  Número
                  <Input
                    id="numero"
                    type="text"
                    name="numero"
                    placeholder="Número"
                  />
                </label>
              </InputGroup>
              <label htmlFor="complemento">Complemento</label>
              <Input
                id="complemento"
                type="text"
                name="complemento"
                placeholder="Complemento"
              />
            </Passo>
            <Passo passo={passo === 4} past={passo < 4}>
              <InputGroup fr="1fr 3fr">
                <label htmlFor="dddCel">
                  DDD
                  <Input
                    id="dddCel"
                    type="text"
                    name="dddCel"
                    placeholder="DDD"
                  />
                </label>

                <label htmlFor="celular">
                  Celular
                  <Input
                    id="celular"
                    type="text"
                    name="celular"
                    placeholder="Celular"
                  />
                </label>
              </InputGroup>
              <InputGroup fr="1fr 3fr">
                <label htmlFor="dddTel">
                  DDD
                  <Input
                    id="dddTel"
                    type="text"
                    name="dddTel"
                    placeholder="DDD"
                  />
                </label>

                <label htmlFor="celular">
                  Telefone
                  <Input
                    id="telefone"
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                  />
                </label>
              </InputGroup>
            </Passo>
            <Passo passo={passo === 5} past={passo < 5} labelCenter>
              <label htmlFor="avatar">Adicione uma foto (opcional)</label>
              <InputFile />
            </Passo>
            <ButtonGroup passo={passo}>
              {passo !== 1 && (
                <button
                  type="button"
                  onClick={() => handleClickPasso(passoPrev)}
                >
                  Voltar
                </button>
              )}
              {passo !== 5 ? (
                <button
                  type="button"
                  onClick={() => handleClickPasso(passoNext)}
                >
                  Próximo
                </button>
              ) : (
                <input type="submit" value="Cadastrar" />
              )}
            </ButtonGroup>
          </Form>
        </Content>
      </Container>
    </BgCadastro>
  );
}
