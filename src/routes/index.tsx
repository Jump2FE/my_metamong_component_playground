import { Route, Routes } from 'react-router-dom';
import Chip from '../pages/chip';
import Button from '../pages/button';
import Modal from '../pages/modal';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/chip" element={<Chip />} />
      <Route path="/button" element={<Button />} />
      <Route path="/modal" element={<Modal />} />
    </Routes>
  );
}
