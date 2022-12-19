import React, { Component } from 'react'
import "./Estudiantes.css"
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'

export default class Estudiantes extends Component {
  render() {
    return (
      <div className='estudiantes-container'>
        <Navbar/>
        <p className='informacion-container-title'>Estudiantes</p>
        <div className='informacion-container-niveles'>
          <Card fondo="https://images.pexels.com/photos/3045825/pexels-photo-3045825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo="Manuel de convivencia" descripcion="Encuentre y descargue aquí el manual de convivencia del jardín." link="/"/>
          <Card fondo="https://images.pexels.com/photos/3045825/pexels-photo-3045825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo="Formatos" descripcion="Encuentre y descargue aquí los formatos de útilidad para el estudiante." link="/"/>
          <Card fondo="https://images.pexels.com/photos/3045825/pexels-photo-3045825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo="Calificaciones" descripcion="Encuentre y descargue aquí las calificaciones del estudiante." link="/"/>
        </div>
        <Footer/>
      </div>
    )
  }
}
