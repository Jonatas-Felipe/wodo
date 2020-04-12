import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 30px 0;

  label {
    height: 180px;
    width: 180px !important;
    cursor: pointer;
    border: 1px solid rgba(204, 204, 204, 0.5);
    border-radius: 50%;
    display: flex !important;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 180px;
      width: 180px;
      background: #eee;
      border-radius: 50%;
    }

    input {
      display: none;
    }
  }
`;
