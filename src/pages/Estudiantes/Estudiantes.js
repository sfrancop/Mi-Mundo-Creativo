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
          <Card fondo="https://cdn.pixabay.com/photo/2021/09/21/09/34/background-6642882_960_720.png" titulo="Manuel de convivencia" descripcion="Encuentre y descargue aquí el manual de convivencia del jardín." link="https://drive.google.com/file/d/1FTsI4uw7UqIfLj82Pkz6EAZQ2AEpbopi/view?usp=share_link"/>
          <Card fondo="https://cdn.pixabay.com/photo/2017/01/17/22/49/background-1988348_960_720.png" titulo="Formatos" descripcion="Encuentre y descargue aquí los formatos de útilidad para el estudiante." link="https://drive.google.com/file/d/11D3R6qdcV1k5iJhimF6hioblSHdSp_pr/view?usp=share_link"/>
          <Card fondo="https://cdn.pixabay.com/photo/2019/10/01/13/58/retro-pattern-4518357_960_720.png" titulo="Calificaciones" descripcion="Encuentre y descargue aquí las calificaciones del estudiante." link="https://drive.google.com/drive/folders/1zkXhGdAl8GCh8upMxaRAylenTfGkx8Pu?usp=share_link"/>
          <Card fondo="https://cdn.pixabay.com/photo/2016/11/10/10/53/seamless-1814009_960_720.png" titulo="Horarios" descripcion="Encuentre y descargue aquí los horarios de los diferentes grados." link="https://drive.google.com/drive/folders/1DAfUZ0Dk91Kllw2SG9GLI5kj2FGKNntZ?usp=share_link"/>
        </div>
        <Footer/>
      </div>
    )
  }
}
