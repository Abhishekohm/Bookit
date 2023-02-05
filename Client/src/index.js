import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const theme = extendTheme(
  {
    colors: {
      main: "rgb(52,34,73)"
    },
  }
)

ReactDOM.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ChakraBaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


