import styled from 'styled-components';

export const Container = styled.div`
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
    }
  }
`;

export const MenuItem = styled.li`
  margin: 0 30px;
  font-weight: bold;
  font-size: 15px;
  border-bottom: 3px solid
    ${props => (props.active ? '#41637e' : 'transparent')};
  :hover {
    border-bottom: 3px solid #41637e;
  }

  a {
    color: ${props => (props.active ? '#707070' : '#9e9c9c')};

    :hover {
      color: #707070;
    }
  }
`;
