import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './Styles/App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Fototer'

const App = () => {
  return (
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </BrowserRouter>
  )
}

export default App
