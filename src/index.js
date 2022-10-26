import React from 'react';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(

  <ChakraProvider>
    <ColorModeScript initialColorMode='light'></ColorModeScript>
      <App/>
  </ChakraProvider>
 ,
document.getElementById('root')
);
