import { Routes, Route } from 'react-router-dom';
import Dashboard from '@/components/layout/Dashboard';
import Login from '@/components/auth/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />}/>
    </Routes>
  );
}
