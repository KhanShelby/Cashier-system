import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Bill from './Bill';
import Shop from './Shop';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bill1" element={<Bill />} />
      <Route path="/shop" element={<Shop />} />
      
    </Routes>
  );
};

export default App;
