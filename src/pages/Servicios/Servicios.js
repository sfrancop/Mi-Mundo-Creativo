import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Nivel from '../../components/Nivel/Nivel'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'

export default class Servicios extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='informacion-container-title'>
                Servicios
        </motion.p>

        <div className='informacion-container-niveles'>
            <Nivel nivel="Estudio dirigido" fondo="https://cdn.pixabay.com/photo/2016/11/01/14/39/memphis-1788465_960_720.png" edadInicial="primeros" edadFinal="grados" unidadInicial="grados" unidadFinal="universitarios" descripcion="Orientación y refuerzo académico en los grados de preescolar, primaria, secundaria y universitario. Preparación para exámenes y talleres. Elaboración de trabajos manuales." />
            <Nivel nivel="Guardería" fondo="https://cdn.pixabay.com/photo/2016/03/31/22/25/background-1297022_960_720.png" edadInicial="3" edadFinal="12" unidadInicial="meses" unidadFinal="años" descripcion="Atención y cuidados de niños. Actividades de estimulación y recreativas acordes a su edad." />
            <Card titulo="Psicología" descripcion="Orientación psicológica para  niños, parajeas o individual. Aparta tu cita." fondo="https://cdn.pixabay.com/photo/2021/07/15/08/43/abstract-6467847_960_720.png" link="https://api.whatsapp.com/send?phone=573118816946"/>
            <Card titulo="Vacaciones recreativas" descripcion="Actividades de baile, arte, pintura, musica, piscina, juegos y cine. Se ofrece a mitad y fin de año." fondo="https://cdn.pixabay.com/photo/2021/06/24/11/18/background-6360861_960_720.png" link="https://api.whatsapp.com/send?phone=573118816946"/>
        </div>

        <Footer/>      

      </div>
    )
  }
}
