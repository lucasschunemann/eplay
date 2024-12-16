import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import { createGlobalStyle } from 'styled-components'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import RestaurantDetails from './pages/RestaurantDetails'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalCss />
      <GlobalStyle />
      <Router>
        <Header cartItems={0} /> {/* Passando cartItems */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
