import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Collection from './pages/collection/Collection'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/collection' element={<Collection />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
