import styled from 'styled-components';
import { darken } from 'polished';

import bgLoginRegister from '~/assets/bg-login-register.svg';

export const BgLogin = styled.div`
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
  padding: 100px;
  width: 500px;

  h1 {
    color: #b7c5d8;
    font-weight: normal;
  }

  h2 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
    color: #b7c5d8;
    font-weight: normal;
  }

  form {
    width: 100%;

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

    input {
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

    > button {
      margin: 20px 0;
      width: 100%;
      border-radius: 50px;
      background: #41637e;
      border: none;
      color: #fff;
      height: 35px;
      transition: background 0.3s;
      :hover {
        background: ${darken(0.05, '#41637e')};
      }
    }

    div {
      display: flex;

      p {
        color: #c8cfd8;
        margin-right: 10px;
      }
    }
  }
`;
