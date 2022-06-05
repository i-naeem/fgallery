import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Dashboard from './routes/dashboard/Dashboard';
import Login from './routes/Login';
import Home from './routes/Home';
import React from 'react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<Dashboard />}>
            <Route index element={<h1>Home</h1>} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
