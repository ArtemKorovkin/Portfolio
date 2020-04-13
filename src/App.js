import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './Styles/App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const App = () => {
  return (
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
          <Main/>
        </div>
      </BrowserRouter>
  )
}

export default App
