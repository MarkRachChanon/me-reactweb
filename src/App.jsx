import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import User from './Pages/User'
import Post from './Pages/Post'
import Profile from './Pages/Profile'
const App = () => {
  //สมมุติว่าเรา login แล้ว
  localStorage.setItem('currentUser', '679b92128289c9e7b70dbb3b'); 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/post" element={<Post/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App