import styled from 'styled-components';
import { darken } from 'polished';
import { Carousel } from 'react-responsive-carousel';

export const CarouselStyled = styled(Carousel)`
  li.slide {
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;

    :nth-child(1) {
      background: #aed3fa !important;
    }

    :nth-child(2) {
      background: #7b9db7 !important;
    }

    :nth-child(3) {
      background: #5c809a !important;
    }

    :nth-child(4) {
      background: #0a2132 !important;
    }
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Content = styled.div`
  height: 350px;
`;

export const Destaques = styled.div`
  width: 100%;
  padding: 40px 0;

  h2 {
    color: #ffca18;
    font-size: 2em;
    text-align: center;
    margin-bottom: 10px;
  }

  > p {
    width: 40%;
    color: #868e99;
    font-size: 1.5em;
    text-align: center;
    margin: 15px auto;
  }

  > div {
    display: flex;
    justify-content: center;

    button {
      color: #868e99;
      border: 1px solid #dae7ed;
      border-radius: 50px;
      background: none;
      width: 150px;
      height: 30px;
      margin: 10px;
      transition: background 0.3s;

      :hover {
        background: #dae7ed;
      }
    }

    :last-child {
      justify-content: space-around;
      padding: 30px 0;

      div {
        cursor: pointer;
        width: 15%;
        border-radius: 4px;
        box-shadow: 0px 5px 10px 1px #bbb;
        transition: box-shadow 0.3s;

        :hover {
          box-shadow: 0px 5px 10px 1px #444;
        }

        img {
          width: 100%;
          border-top-right-radius: 4px;
          border-top-left-radius: 4px;
        }

        p {
          color: #707070;
          padding: 30px 0;
          text-align: center;
        }
      }
    }
  }
`;

export const BgCategorias = styled.div`
  background: #daecff;
`;

export const Categorias = styled.div`
  width: 100%;
  padding: 40px 0;

  h2 {
    color: #ffca18;
    font-size: 2em;
    text-align: center;
    margin-bottom: 10px;
  }

  > p {
    width: 40%;
    color: #868e99;
    font-size: 1.5em;
    text-align: center;
    margin: 15px auto;
  }

  > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    div {
      margin: 20px;
      width: 26%;
      height: 150px;
      background: #fff;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0px 5px 10px 1px #bbb;
      transition: box-shadow 0.3s;

      :hover {
        box-shadow: 0px 5px 10px 1px #444;
      }
    }

    :last-child {
      margin-top: 20px;

      input {
        width: 400px;
        height: 35px;
        border-radius: 4px;
        border: 1px solid #ccc;
        margin-right: 10px;
        padding: 0 10px;

        ::placeholder {
          color: #bbb;
        }
      }

      button {
        background: #41637e;
        border: none;
        width: 60px;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background 0.3s;

        :hover {
          background: ${darken(0.05, '#41637e')};
        }
      }
    }
  }
`;

export const Descricao = styled.div`
  padding: 50px 0;

  p {
    width: 40%;
    color: #868e99;
    font-size: 1.5em;
    text-align: center;
    margin: 0 auto;
  }
`;
