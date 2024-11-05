import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Bill from './Bill';
import FoodPage from './FoodPage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Bill" element={<Bill />} />
      <Route path="/:tableId/FoodPage" element={<FoodPage />} />
    </Routes>
  );
};

export default App;
