import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Nivel from '../../components/Nivel/Nivel'
import Footer from '../../components/Footer/Footer'

export default class Servicios extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <p className='informacion-container-title'>Servicios</p>

        <div className='informacion-container-niveles'>
            <Nivel nivel="Estudio dirigido" fondo="https://images.pexels.com/photos/6402526/pexels-photo-6402526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" edadInicial="primeros" edadFinal="grados" unidadInicial="grados" unidadFinal="universitarios" descripcion="Orientación y refuerzo académico en los grados de preescolar, primaria, secundaria y universitario. Preparación para exámenes y talleres. Elaboración de trabajos manueales." />
            <Nivel nivel="Guardería" fondo="https://images.pexels.com/photos/3418400/pexels-photo-3418400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" edadInicial="3" edadFinal="12" unidadInicial="meses" unidadFinal="años" descripcion="Atención y cuidados de niños. Actividades de estimulación y recreativas acordes a su edad." />
        </div>

        <Footer/>      

      </div>
    )
  }
}
