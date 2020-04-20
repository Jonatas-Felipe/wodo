import styled, { css } from 'styled-components';

export const Container = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    padding: 20px;
    margin: 0 auto;

    > img {
      height: 73px;
    }

    ul {
      display: flex;
      align-items: center;
    }
  }
`;

export const MenuItem = styled.li`
  margin: 0 30px;
  font-weight: bold;
  font-size: 15px;

  a {
    transition: opacity 0.3s;
    color: ${props => (props.active ? '#707070' : '#9e9c9c')};
    border-bottom: 3px solid
      ${props => (props.active ? '#41637e' : 'transparent')};

    :hover {
      color: #707070;
      ${props =>
        !props.perfil
          ? css`
              border-bottom: 3px solid
                ${props => (!props.perfil ? '#41637e' : 'transparent')};
            `
          : css`
              opacity: 0.7;
            `};
    }
  }

  button {
    background: transparent;
    border: none;
    font-weight: bold;
    transition: opacity 0.3s;
    color: #9e9c9c;
    border-bottom: 3px solid 'transparent';
    :hover {
      color: #ff0000;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
