import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'

// alert cofiguration
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

class Root extends Component {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <Navbar />
        <Footer />
      </AlertProvider>
    )
  }
}

render(<Root />, document.getElementById('root'))
