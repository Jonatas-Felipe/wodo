import React from 'react';

import Logo from '../../assets/logo-wodo.svg';
import LogoFooter from '../../assets/logo-wodo-footer.svg';

import segurancaDados from '../../assets/vetorcomputer.svg';
import novosServicos from '../../assets/novos-servicos.svg';
import troqueMensagem from '../../assets/troque-mensagens.svg';

import plano1 from '../../assets/plano-1.svg';
import plano2 from '../../assets/plano-2.svg';
import plano3 from '../../assets/plano-3.svg';

import {
  Header,
  Container,
  Content,
  Planos,
  BgPlanos,
  Sobre,
  ButtonPlano,
  Descricao,
  Footer,
} from './styles';

export default function Home() {
  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="Logo do Wodo" />
          <ul>
            <li>Home</li>
            <li>Serviços</li>
            <li>Contato</li>
            <li>Login</li>
          </ul>
        </div>
      </Header>
      <Container>
        <Content>
          <div>
            <h1>Descubra novos serviços ou até mesmo, divilgue o seus</h1>
            <p>
              Lorem ipsum morbi blandit diam per molestie quis neque elementum
              faucibus sem nisi etiam quisque, donec morbi blandit diam per
              molestie
            </p>
            <button type="button">Entrar</button>
          </div>
        </Content>
      </Container>
      <Sobre>
        <h2>Sobre a Wodo</h2>
        <div>
          <div>
            <img src={segurancaDados} alt="" />
            <h3>Segurança de dados</h3>
            <p>
              Lorem ipsum pulvinar mi sed consectetur auctor ligula cubilia
              tellus, felis aptent vivamus nam vulputate
            </p>
          </div>
          <div>
            <div>
              <img src={novosServicos} alt="" />
              <h3>Segurança de dados</h3>
              <p>
                Lorem ipsum pulvinar mi sed consectetur auctor ligula cubilia
                tellus, felis aptent vivamus nam vulputate
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={troqueMensagem} alt="" />
              <h3>Segurança de dados</h3>
              <p>
                Lorem ipsum pulvinar mi sed consectetur auctor ligula cubilia
                tellus, felis aptent vivamus nam vulputate
              </p>
            </div>
          </div>
        </div>
      </Sobre>
      <Planos>
        <h2>Conheça a Wodo e assine</h2>
        <div>
          <div>
            <BgPlanos plano="plano-1">
              <div>
                <img src={plano1} alt="" />
                <h3>R$ 10,00</h3>
                <p>
                  Lorem ipsum vel lobortis magna mauris, viverra eget volutpat
                  amet, sodales
                </p>
                <ButtonPlano type="button" buttonAssinar="plano-1">
                  Assinar
                </ButtonPlano>
              </div>
            </BgPlanos>
          </div>

          <div>
            <BgPlanos plano="plano-2">
              <div>
                <img src={plano2} alt="" />
                <h3>R$ 10,00</h3>
                <p>
                  Lorem ipsum vel lobortis magna mauris, viverra eget volutpat
                  amet, sodales
                </p>
                <ButtonPlano type="button" buttonAssinar="plano-2">
                  Assinar
                </ButtonPlano>
              </div>
            </BgPlanos>
          </div>

          <div>
            <BgPlanos plano="plano-3">
              <div>
                <img src={plano3} alt="" />
                <h3>R$ 10,00</h3>
                <p>
                  Lorem ipsum vel lobortis magna mauris, viverra eget volutpat
                  amet, sodales
                </p>
                <ButtonPlano type="button" buttonAssinar="plano-3">
                  Assinar
                </ButtonPlano>
              </div>
            </BgPlanos>
          </div>
        </div>
      </Planos>
      <Descricao>
        <h2>Descubra novos serviços</h2>
        <p>
          Lorem ipsum pulvinar mi sed consectetur auctor ligula cubilia tellus,
          felis aptent vivamus nam vulputate
        </p>
      </Descricao>
    
      <Footer>
        <div>
          <img src={LogoFooter} alt="Logo Wodo" />
          <ul>
            <li>Sobre a Wodo</li>
            <li>Fale conosco</li>
            <li>Condições gerais</li>
            <li>Cadastrarr</li>
          </ul>
        </div>
      </Footer>
    </>
  );
}
