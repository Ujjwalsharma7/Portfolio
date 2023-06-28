import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'

import Portfolio from './components/portfolio/Portfolio'
import Por from './components/por/Por'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Por />
      <Contact />
      <Footer />
    </div>
  )
}

