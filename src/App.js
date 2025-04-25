import HomePage from './pages/HomePage';
import './App.css';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import CreateListing from './pages/EnergyListing';
import {  Route, Routes } from 'react-router-dom';
import { Check } from 'lucide-react';
import CheckoutPage from './pages/CheckoutPage';
import Login from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
    </div>
  );
}


export default App;
