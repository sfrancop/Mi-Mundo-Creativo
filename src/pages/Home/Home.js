import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Informacion from '../../components/Informacion/Informacion'

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

