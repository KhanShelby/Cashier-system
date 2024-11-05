import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Bill from './Bill';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Bill" element={<Bill />} />
    </Routes>
  );
};

export default App;
