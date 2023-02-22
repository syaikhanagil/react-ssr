import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Soon from './pages/Soon';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/soon" element={<Soon />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
