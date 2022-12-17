import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.svg"
import "./Navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <img className='navbar-container-imagen' src={Logo} alt="Logo"/>
        <ul className='navbar-container-list'>
            <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/inicio">Inicio</Link></li>
            <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/nosotros">Nosotros</Link></li>
            <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/servicios">Servicios</Link></li>
            <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/inscripciones">Inscripciones</Link></li>
            <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/calificaciones">Calificaciones</Link></li>
        </ul>
      </div>
    )
  }
}
