import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/** importing our pages */
import Tracks from './tracks';

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tracks />} />
      </Routes>
    </Router>
  );
}
