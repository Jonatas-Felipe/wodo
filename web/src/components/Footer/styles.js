import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
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
