import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.svg"
import "./Navbar.css"
import { House, People, BrightnessAltHigh, ClipboardMinus, Award } from 'react-bootstrap-icons';

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar-container'>

        <Link to="/"><img className='navbar-container-image' src={Logo} alt="Logo"/></Link>

        <ul className='navbar-container-list'>

          <div className='navbar-container-list-element-container'>
            <li className='navbar-container-list-element'>
              <Link to="/"><House className='navbar-container-list-element-icon'/></Link>
              <br/>
              <Link className='navbar-container-list-element-link' to="/inicio">Inicio</Link>
            </li>
          </div>

          <div className='navbar-container-list-element-container'>
            <Link to="/nosotros"><People className='navbar-container-list-element-icon'/></Link>
            <br/>
            <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/nosotros">Nosotros</Link></li>
          </div>

          <div className='navbar-container-list-element-container'>
            <Link to="/servicios"><BrightnessAltHigh className='navbar-container-list-element-icon'/></Link>
            <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/servicios">Servicios</Link></li>
          </div>

          <div className='navbar-container-list-element-container'>
            <Link to="/inscripciones"><ClipboardMinus className='navbar-container-list-element-icon'/></Link>
            <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/inscripciones">Inscripciones</Link></li>
          </div>

          <div className='navbar-container-list-element-container'>
            <Link to="/calificaciones"><Award className='navbar-container-list-element-icon'/></Link>
            <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/calificaciones">Calificaciones</Link></li>
          </div>

        </ul>

      </div>
    )
  }
}
