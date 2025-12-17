import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/login/LoginPage';
import OrderPage from './components/pages/OrderPage';



function App() {

  
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:firstname" element={<OrderPage />} />
    </Routes>
  );
}

export default App
