import { Route, Routes } from 'react-router-dom';
import Chip from '../pages/chip';
import Button from '../pages/button';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/chip" element={<Chip />} />
      <Route path="/button" element={<Button />} />
    </Routes>
  );
}
