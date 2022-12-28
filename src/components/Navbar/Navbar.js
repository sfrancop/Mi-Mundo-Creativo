import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.svg"
import "./Navbar.css"
import { House, People, BrightnessAltHigh, ClipboardMinus, Journal } from 'react-bootstrap-icons';
import { motion } from 'framer-motion'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar-container'>

        <Link to="/">
          <motion.img 
            initial={{ y: -30, opacity:0}}
            animate={{ y: 0, opacity:1 }}
            transition={{ duration:0.75}}
            className='navbar-container-image'
            src={Logo}
            alt="Logo"
          />
        </Link>

        <ul className='navbar-container-list'>

          <motion.div
            initial={{ opacity:0}}
            animate={{ opacity:1 }}
            transition={{ duration:0.4, delay:0.74}}
            className='navbar-container-list-element-container'>
              <li className='navbar-container-list-element'>
                <Link to="/"><House className='navbar-container-list-element-icon'/></Link>
                <br/>
                <Link className='navbar-container-list-element-link' to="/inicio">Inicio</Link>
              </li>
          </motion.div>

          <motion.div
            initial={{ opacity:0}}
            animate={{ opacity:1 }}
            transition={{ duration:0.4, delay:0.84}}
            className='navbar-container-list-element-container'>
              <Link to="/nosotros"><People className='navbar-container-list-element-icon'/></Link>
              <br/>
              <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/nosotros">Nosotros</Link></li>
          </motion.div>

          <motion.div
            initial={{ opacity:0}}
            animate={{ opacity:1 }}
            transition={{ duration:0.4, delay:0.94}}
            className='navbar-container-list-element-container'>
              <Link to="/servicios"><BrightnessAltHigh className='navbar-container-list-element-icon'/></Link>
              <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/servicios">Servicios</Link></li>
          </motion.div>

          <motion.div
            initial={{ opacity:0}}
            animate={{ opacity:1 }}
            transition={{ duration:0.4, delay:1.04}}
            className='navbar-container-list-element-container'>
              <Link to="/aspirantes"><ClipboardMinus className='navbar-container-list-element-icon'/></Link>
              <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/aspirantes">Aspirantes</Link></li>
          </motion.div>

          <motion.div
            initial={{ opacity:0}}
            animate={{ opacity:1 }}
            transition={{ duration:0.4, delay:1.14}}
            className='navbar-container-list-element-container'>
              <Link to="/estudiantes"><Journal className='navbar-container-list-element-icon'/></Link>
              <li className='navbar-container-list-element'><Link className='navbar-container-list-element-link' to="/estudiantes">Estudiantes</Link></li>
          </motion.div>

        </ul>

      </div>
    )
  }
}
