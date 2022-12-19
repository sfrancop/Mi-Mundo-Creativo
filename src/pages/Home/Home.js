import React, { Component } from 'react'
import Informacion from '../../components/Informacion/Informacion'
import Navbar from '../../components/Navbar/Navbar'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Informacion/>
      </div>
    )
  }
}

