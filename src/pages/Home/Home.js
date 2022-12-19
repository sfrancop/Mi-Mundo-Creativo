import React, { Component } from 'react'
import Informacion from '../../components/Informacion/Informacion'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

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

