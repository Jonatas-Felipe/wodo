import React from 'react';
import { MdSearch } from 'react-icons/md';

import prestadorImage from '~/assets/prestador.png';

import {
  CarouselStyled,
  Container,
  Content,
  Destaques,
  BgCategorias,
  Categorias,
  Descricao,
} from './styles';

export default function Servicos() {
  return (
    <>
      <CarouselStyled showStatus={false} emulateTouch>
        <Container>
          <Content>
            <p>Teste</p>
          </Content>
        </Container>
        <Container>
          <Content>
            <p>Teste</p>
          </Content>
        </Container>
        <Container>
          <Content>
            <p>Teste</p>
          </Content>
        </Container>
        <Container>
          <Content>
            <p>Teste</p>
          </Content>
        </Container>
      </CarouselStyled>

      <Container>
        <Destaques>
          <h2>Destaques:</h2>
          <p>
            Lorem ipsum morbi blandit diam per molestie quis neque elementum
            faucibus sem nisi etiam quisque, donec
          </p>

          <div>
            <button type="button">Esta semana</button>
            <button type="button">Semana passada</button>
            <button type="button">Este mês</button>
          </div>

          <div>
            <div>
              <img src={prestadorImage} alt="Prestador Avatar" />
              <p>Lorem ipsum morbi blandit</p>
            </div>

            <div>
              <img src={prestadorImage} alt="Prestador Avatar" />
              <p>Lorem ipsum morbi blandit</p>
            </div>

            <div>
              <img src={prestadorImage} alt="Prestador Avatar" />
              <p>Lorem ipsum morbi blandit</p>
            </div>

            <div>
              <img src={prestadorImage} alt="Prestador Avatar" />
              <p>Lorem ipsum morbi blandit</p>
            </div>

            <div>
              <img src={prestadorImage} alt="Prestador Avatar" />
              <p>Lorem ipsum morbi blandit</p>
            </div>
          </div>
        </Destaques>
      </Container>

      <BgCategorias>
        <Container>
          <Categorias>
            <h2>Categorias:</h2>
            <p>
              Lorem ipsum morbi blandit diam per molestie quis neque elementum
              faucibus sem nisi etiam quisque, donec
            </p>

            <div>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>

            <div>
              <input type="text" placeholder="Busca" />
              <button type="button">
                <MdSearch size={25} color="#fff" />
              </button>
            </div>
          </Categorias>
        </Container>
      </BgCategorias>

      <Container>
        <Descricao>
          <p>
            Lorem ipsum morbi blandit diam per molestie quis neque elementum
            faucibus sem nisi etiam quisque, donec
          </p>
        </Descricao>
      </Container>
    </>
  );
}
