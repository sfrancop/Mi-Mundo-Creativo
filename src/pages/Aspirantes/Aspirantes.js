import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./Aspirantes.css"
import { FileEarmark } from 'react-bootstrap-icons'
import { motion } from 'framer-motion'

export default class Inscripcion extends Component {
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
                Aspirantes
        </motion.p>

        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='aspirantes-texto'>
              Para inscribir a tu hijo en en el jardín (para los 
              demás servicios, contáctanos) acercate a la manzana A
              casa 18 en el barrio Maria Camila Sur con:
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8}}
          variants={{
              visible: { x:0, opacity: 1 },
              hidden: { x:-30, opacity: 0 }
          }}
          className='nosotros-container-row-1 aspirantes-row'>
            <div className='nosotros-container-leftcolumn-1'>
                <p className='nosotros-text'>
                    <ul className='aspirantes-lista'>
                      <li><span className='aspirantes-lista-point'>• </span>Fotocopia de registro civil de nacimiento</li>
                      <li><span className='aspirantes-lista-point'>• </span>Fotocopia del carnet de vacunación</li>
                      <li><span className='aspirantes-lista-point'>• </span>Fotocopia del carnet de creicimiento y desarrollo</li>
                      <li><span className='aspirantes-lista-point'>• </span>Fotocopia del carnet de EPS</li>
                      <li><span className='aspirantes-lista-point'>• </span>Fotocopia de la cédula de los padres y/o acudiente</li>
                      <li><span className='aspirantes-lista-point'>• </span>Último boletín de notas</li>
                      <li><span className='aspirantes-lista-point'>• </span>Paz y salvo del colegio anterior</li>
                      <li><span className='aspirantes-lista-point'>• </span>SIMAT</li>
                      <li><span className='aspirantes-lista-point'>• </span>Folder de cartón plástico color rojo</li>
                    </ul>
                </p>
            </div>
            <div className='nosotros-container-rightcolumn-1'>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay:0.4}}
                variants={{
                    visible: { scale:1, opacity: 1 },
                    hidden: { scale:0.8, opacity: 0 }
                }}
                className='nosotros-icon-1'>
                    <FileEarmark/>
              </motion.div>
            </div>
        </motion.div>
        <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay:0.4}}
                variants={{
                    visible: { scale:1, opacity: 1 },
                    hidden: { scale:0.8, opacity: 0 }
                }}
                className='aspirantes-icon'>
                    <FileEarmark/>
              </motion.div>
        <Footer/>
      </div>
    )
  }
}
