import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './assets/scss/main.scss'

// pages:
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import NotFoundPage from './pages/NotFound'

// components:
import { Header, Footer } from './components'

const App = () => {
  return (
    <div className='ui-wrapper'>
      <Header isLogo />
      <div className='ui-content-wrapper'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
