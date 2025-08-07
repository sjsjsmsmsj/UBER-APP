import { useState } from 'react'
import './App.css'
import Start from './pages/Start.jsx'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import { Routes, Route } from "react-router-dom"
import { UserDataContext } from './context/UserContext.jsx'
import { useContext } from 'react'
import UserProtectWrapper from './pages/UserProtectWrapper.jsx'
import UserLogout from './pages/UserLogout.jsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route
        path='/home'
        element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        }

      />

      <Route
        path='/user/logout'
        element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        }

      />
    </Routes>
  )
}

export default App
