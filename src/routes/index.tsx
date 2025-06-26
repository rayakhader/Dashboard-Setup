import { Routes, Route } from 'react-router-dom';
import Dashboard from '@/components/layout/Dashboard';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
