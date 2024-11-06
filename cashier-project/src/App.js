import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Bill from './Bill';
import Shop from './Shop';
import Table from './Table';

const App = () => {
  const [tableStatuses, setTableStatuses] = useState({});

  const updateTableStatus = (tableId, status) => {
    setTableStatuses(prev => ({ ...prev, [tableId]: status }));
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bill1" element={<Bill />} />
      <Route path="/shop/:tableId" element={<Shop updateTableStatus={updateTableStatus} tableStatuses={tableStatuses} />} />
    </Routes>
  );
};

export default App;
