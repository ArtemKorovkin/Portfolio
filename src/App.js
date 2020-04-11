import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './Styles/App.scss'
import Header from './components/Header/Header'

const App = () => {
  return (
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
        </div>
      </BrowserRouter>
  )
}

export default App
