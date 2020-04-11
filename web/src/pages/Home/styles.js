import styled, { css } from 'styled-components';
import { darken } from 'polished';
import bgHome from '../../assets/bg-home.svg';

export const Header = styled.header`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    padding: 20px;
    margin: 0 auto;

    img {
      height: 73px;
    }

    ul {
      display: flex;
      li {
        margin: 0 30px;
        color: #9e9c9c;
        font-weight: bold;
        font-size: 15px;

        :first-child {
          color: #707070;
          border-bottom: 3px solid #41637e;
        }
      }
    }
  }
`;

export const Container = styled.div`
  background-image: url(${bgHome});
  background-position: top right;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;

  div {
    width: 628px;
    padding: 100px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 16px;
      color: #707070;
      margin: 20px 0;
    }

    button {
      width: 212px;
      height: 38px;
      border-radius: 106px;
      border: none;
      color: #fff;
      background: #41637e;
    }
  }
`;

export const Sobre = styled.div`
  padding: 50px;
  max-width: 1440px;
  margin: 0 auto;

  h2 {
    text-align: center;
    color: #41637e;
    font-size: 2em;
  }

  > div {
    display: flex;
    justify-content: space-around;

    div {
      width: 350px;

      img {
        width: 100%;
        height: 360px;
      }

      h3 {
        font-size: 1.5em;
        font-weight: normal;
        text-align: center;
        color: #707070;
        margin-bottom: 5px;
        margin-top: auto;
      }

      p {
        color: #c5ccd6;
        font-size: 1em;
      }
    }
  }
`;

export const Planos = styled.div`
  padding: 100px 50px;
  background: linear-gradient(
    90deg,
    #daecff 0%,
    #daecff 20%,
    #fff 20%,
    #fff 100%
  );

  h2 {
    text-align: center;
    color: #41637e;
    font-size: 2em;
    margin-bottom: 30px;
  }

  > div {
    display: flex;
    justify-content: space-around;
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const BgPlanos = styled.div`
  width: 250px;
  height: 335px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 20px;

  ${props => {
    let Plano;
    switch (props.plano) {
      case 'plano-2':
        Plano = css`
          background: linear-gradient(
            90deg,
            #7b9db7 0%,
            #7b9db7 5%,
            #fff 5%,
            #fff 100%
          );
        `;
        break;
      case 'plano-3':
        Plano = css`
          background: linear-gradient(
            90deg,
            #ffca18 0%,
            #ffca18 5%,
            #fff 5%,
            #fff 100%
          );
        `;
        break;
      default:
        Plano = css`
          background: linear-gradient(
            90deg,
            #41637e 0%,
            #41637e 5%,
            #fff 5%,
            #fff 100%
          );
        `;
    }
    return Plano;
  }}

  > div {
    width: 250px;
    height: 335px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 20px;
    margin-top: 20px;
    margin-left: -40px;

    img {
      width: 100%;
      height: 200px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1.5em;
      text-align: center;
      color: #707070;
      margin-bottom: 5px;
      margin-top: auto;
    }

    p {
      color: #c5ccd6;
      font-size: 1em;
    }
  }
`;

export const ButtonPlano = styled.button`
  position: relative;
  bottom: -15px;
  width: 175px;
  height: 38px;
  margin: 0 20px;
  border-radius: 100px;
  border: none;
  color: #fff;
  transition: background 0.3s;
  ${props => {
    let estiloButton;
    switch (props.buttonAssinar) {
      case 'plano-2':
        estiloButton = css`
          background: #7b9db7;
          :hover {
            background: ${darken(0.05, '#7b9db7')};
          }
        `;
        break;
      case 'plano-3':
        estiloButton = css`
          background: #ffca18;
          :hover {
            background: ${darken(0.05, '#ffca18')};
          }
        `;
        break;
      default:
        estiloButton = css`
          background: #41637e;
          :hover {
            background: ${darken(0.05, '#41637e')};
          }
        `;
    }
    return estiloButton;
  }}
`;

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;

  h2 {
    color: #707070;
    margin-bottom: 30px;
    font-weight: normal;
  }

  p {
    color: #c5ccd6;
    width: 800px;
    text-align: center;
    font-size: 30px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 15px;
  background: #94afc4;

  div {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    img {
      width: 45px;
    }

    ul {
      display: flex;
      justify-content: space-between;

      li {
        color: #fff;

        :nth-child(2) {
          margin: 0 50px;
        }
      }
    }
  }
`;
