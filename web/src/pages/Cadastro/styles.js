import styled, { css } from 'styled-components';
import { darken } from 'polished';

import bgLoginRegister from '~/assets/bg-login-register.svg';

export const BgCadastro = styled.div`
  background-image: url(${bgLoginRegister});
  background-position: top right;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 50px 100px;
  width: 500px;
  height: 600px;

  h1 {
    color: #b7c5d8;
    font-weight: normal;
  }

  h2 {
    text-align: center;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 30px;
    color: #b7c5d8;
    font-weight: normal;
  }

  form {
    width: 100%;
    position: relative;

    label {
      display: block;
      width: 100%;
      color: #b7c5d8;
      font-size: 15px;

      + label {
        display: flex;
        border-bottom: 1px solid #d8d8d8;
        margin-bottom: 20px;

        > input {
          border: none;
          margin-bottom: 0;
        }
        button {
          border: none;
          background: none;
          svg {
            transition: color 0.3s;
          }

          :hover {
            svg {
              color: ${darken('0.05', '#C6CBD4')} !important;
            }
          }
        }
      }
    }

    input,
    select {
      width: 100%;
      border: none;
      border-bottom: 1px solid #d8d8d8;
      padding: 5px;
      margin-bottom: 20px;
      ::placeholder {
        color: #c8cfd8;
      }
    }

    a {
      color: #ffca18;
      transition: color 0.3s;
      :hover {
        color: ${darken(0.1, '#ffca18')};
      }
    }
  }
`;

export const Passo = styled.div`
  width: 300px;
  height: 330px;
  background: #fff;
  transition: left 1s, z-index 2.5s;
  ${props =>
    props.passo
      ? css`
          position: relative;
          left: 0;
          z-index: 0;
          /* top: 0; */
        `
      : css`
          transition: left 1s, z-index 0.1s;
          position: absolute;
          top: 0;
          z-index: -1;
          ${props.past
            ? css`
                left: 2000px;
              `
            : css`
                left: -800px;
              `}
        `};

  label {
    text-align: ${props => (props.labelCenter ? 'center' : 'left')};
  }
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.fr ? props.fr : '1fr')};
  justify-content: space-between;

  label {
    display: block !important;
  }

  input {
    width: 90% !important;
  }

  select {
    width: 90%;
    border: none;
    border-bottom: 1px solid #d8d8d8;
    padding: 5px;
    margin-bottom: 20px;
    ::placeholder {
      color: #c8cfd8;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: ${props =>
    props.passo === 1 ? 'flex-end' : 'space-between'};

  > button,
  input[type='submit'] {
    margin: 20px 0;
    width: 49%;
    border-radius: 50px;
    border: none;
    color: #fff;
    height: 35px;
    transition: background 0.3s;

    :first-child {
      background: #aaa;
    }

    :last-child {
      background: #41637e;
    }

    :hover {
      :first-child {
        background: ${darken(0.05, '#aaa')};
      }

      :last-child {
        background: ${darken(0.05, '#41637e')};
      }
    }
  }
`;
