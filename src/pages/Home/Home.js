import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Informacion from '../../components/Informacion/Informacion'
import Navbar from '../../components/Navbar/Navbar'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Informacion/>
        <Footer/>
      </div>
    )
  }
}

