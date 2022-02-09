import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { CookiesProvider } from 'react-cookie'

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
