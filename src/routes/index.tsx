import { Routes, Route } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import Messages from '@/pages/Messages';
import BaseWrapper from '@/components/layout/BaseWrapper';
import Users from '@/pages/Users';
import Settings from '@/pages/Settings';
import Login from '@/pages/Login';

export default function AppRoutes() {
  return (
    <Routes>
     <Route element={<BaseWrapper />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/login" element={<Login />}/>
    </Routes>
  );
}
