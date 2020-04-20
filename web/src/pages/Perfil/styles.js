import styled from 'styled-components';
import { darken } from 'polished';

export const BgPerfil = styled.div`
  background: rgba(244, 244, 244, 0.7);
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  padding: 50px;

  > div {
    :first-child {
      width: 20%;
      padding: 10px 20px;
      > div {
        :first-child {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin: 20px 0;

          img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin-bottom: 10px;
          }

          h2 {
            font-size: 20px;
            margin-bottom: 20px;
            color: #707070;
          }

          p {
            margin-bottom: 10px;
            color: #8b8c8f;
          }

          p.email {
            width: 100%;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
          }

          h3 {
            align-self: flex-start;
            color: #c5ccd6;
            font-weight: normal;
            margin: 10px 0;
          }

          > div {
            width: 100%;
            align-self: flex-start;
            display: flex;
            margin-bottom: 20px;
          }
        }

        :last-child {
          li {
            font-size: 20px;
            border-bottom: 2px solid #12455a;
            padding-bottom: 5px;
            margin-bottom: 20px;
            cursor: pointer;
            transition: border-bottom 0.3s;

            a {
              display: block;
              color: #12455a;
              transition: color 0.3s;
            }

            :hover {
              border-bottom: 2px solid #ffca18;
              a {
                color: #ffca18;
              }
            }
          }

          li.sair {
            border-bottom: 2px solid transparent;
            button {
              width: 100%;
              height: 30px;
              border: none;
              border-radius: 4px;
              background: #fa0000;
              color: #fff;
            }
            :hover {
              border-bottom: 2px solid transparent;
              button {
                background: ${darken(0.05, '#fa0000')};
              }
            }
          }
        }
      }
    }

    :last-child {
      width: 80%;

      h1 {
        color: #ffca18;
        font-weight: normal;
        text-align: center;
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ccc;
      }

      h2 {
        color: #707070;
        text-align: center;
        padding-bottom: 10px;
      }

      > img {
        width: 100%;
        border-radius: 4px;
      }

      > div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        div {
          width: 100%;
          display: block;
          margin: 0 2px;
          transition: opacity 0.3s;

          :hover {
            cursor: pointer;
            opacity: 0.5;
          }

          img {
            display: block;
            width: 100%;
            margin: 0 1px;
            border-radius: 4px;
          }
        }

        :last-child {
          margin-top: 20px;
          justify-content: center;
          align-items: center;

          p {
            font-size: 17px;
            color: #8b8c8f;
          }

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background 0.3s;
            background: #ffca18;
            color: #fff;
            border: none;
            border-radius: 4px;
            width: 150px;
            height: 30px;
            margin-left: 10px;

            :hover {
              background: ${darken(0.1, '#ffca18')};
            }

            svg {
              margin-right: 2px;
            }
          }
        }
      }
    }
  }
`;
