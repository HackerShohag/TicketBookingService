import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home/home';
import LogInPage from './pages/User/LogIn';
import SignUpPage from './pages/User/Register';
import NavBar from './components/NavigationBar/NavBar';
import { NotFound } from './pages/NotFound/NotFound';
import UserProfile from './pages/User/Profile';

import BusService from './pages/BusService/BusService';
import HotelService from './pages/HotelService/HotelService';
import TrainService from './pages/TrainService/TrainService';

import { CompanyLogo } from './pages/Logo/Logo';
import Layout from './components/Layout';
import './App.css';

import RequireAuth from './components/RequireAuth';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      {location.pathname === '/' && <CompanyLogo />}
      <Routes>
        <Route path="/" element={<Layout />} >

          {/* General Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path='/profile' element={<UserProfile />} />
          </Route>

          {/* Provided Routes */}
          <Route path='/bus' element={<BusService />} />
          <Route path='/hotel' element={<HotelService />} />
          <Route path='/train' element={<TrainService />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>

  )
}

export default App;
