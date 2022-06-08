import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Dashboard from './routes/dashboard/Dashboard';
import Login from './routes/Login';
import Home from './routes/Home';
import React from 'react';
import Photos from './routes/dashboard/Photos';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/app" element={<Dashboard />}>
            <Route index element={<Photos />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
