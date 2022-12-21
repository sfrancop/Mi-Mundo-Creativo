import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./Aspirantes.css"
import { FileEarmark } from 'react-bootstrap-icons'

export default class Inscripcion extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <p className='informacion-container-title'>Aspirantes</p>
        <p className='aspirantes-texto'>Para inscribir a tu hijo en 
        cualquiera de nuestros servicios acercate a la manzana A 
        casa 18 en el barrio Maria Camila Sur con:</p>

        <div className='nosotros-container-row-1'>
            <div className='nosotros-container-leftcolumn-1'>
                <p className='nosotros-text'>
                    <ul>
                      <li>Fotocopia de registro civil de nacimiento</li>
                      <li>Fotocopia del carnet de vacunación</li>
                      <li>Fotocopia del carnet de creicimiento y desarrollo</li>
                      <li>Fotocopia del carnet de EPS</li>
                      <li>Fotocopia de la cédula de los padres y/o acudiente</li>
                      <li>Último boletín de notas</li>
                      <li>Paz y salvo del colegio anterior</li>
                      <li>SIMAT</li>
                      <li>Folder de cartón plástico color rojo</li>
                    </ul>
                </p>
            </div>
            <div className='nosotros-container-rightcolumn-1'>
                <div className='nosotros-icon-1'><FileEarmark/></div>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
