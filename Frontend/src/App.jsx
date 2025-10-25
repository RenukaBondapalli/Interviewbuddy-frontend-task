import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import UserList from './components/UserList';
import MyProfile from './components/MyProfile';

const AppLayout = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        {/* Page content */}
        <Outlet />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* Home page */}
        <Route path="/" element={<UserList />} />
        
        {/* Profile page */}
        <Route path="/profile" element={<MyProfile />} />
      </Route>
    </Routes>
  );
};

export default App;
