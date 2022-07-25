//Global imports
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Route imports
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import Signup from './routes/Signup';
//Component imports
//Local imports
import './css/App.scss';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <Routes>
              <Route element={<PrivateRoutes />}>
                <Route element={<Dashboard />} path="/" exact/>
              </Route>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<Signup />}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App
