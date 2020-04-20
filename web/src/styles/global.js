import { createGlobalStyle } from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  ::-webkit-scrollbar{
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #41637e;
}

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: #fff;
    overflow-x: hidden;
  }

  body, input, button{
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }
`;
