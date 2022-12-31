import React, { Component } from 'react'
import "./ValoresAgregados.css"
import {Balloon, Boxes, Building, CloudSun, People} from 'react-bootstrap-icons'
import { motion } from 'framer-motion'

export default class ValoresAgregados extends Component {
  render() {
    return (
      <div className='valoresagregados'>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
                visible: { y:0, opacity: 1 },
                hidden: { y:-20, opacity: 0 }
            }}
            className='valoresagregados-elemento-container'>
                <div className='valoresagregados-elemento'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay:0.4 }}
                        variants={{
                            visible: { y:0, opacity: 1 },
                            hidden: { y:-5, opacity: 0 }
                        }}>
                            <Building className='valoresagregados-elemento-icon'/>
                    </motion.div>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay:1.2 }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className='valoresagregados-elemento-text'>
                            Instalaciones adecuadas y espacios de recreación
                    </motion.p>
                </div>
        </motion.div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
                visible: { y:0, opacity: 1 },
                hidden: { y:-20, opacity: 0 }
            }}
            className='valoresagregados-elemento-container'>
                <div className='valoresagregados-elemento'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay:0.4 }}
                        variants={{
                            visible: { y:0, opacity: 1 },
                            hidden: { y:-5, opacity: 0 }
                        }}>
                            <People className='valoresagregados-elemento-icon'/>
                    </motion.div>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay:1.2 }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className='valoresagregados-elemento-text'>
                        Grupos pequeños
                    </motion.p>
                </div>
        </motion.div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
                visible: { y:0, opacity: 1 },
                hidden: { y:-20, opacity: 0 }
            }}
            className='valoresagregados-elemento-container'>
                <div className='valoresagregados-elemento'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay:0.4 }}
                        variants={{
                            visible: { y:0, opacity: 1 },
                            hidden: { y:-5, opacity: 0 }
                        }}>
                            <Balloon className='valoresagregados-elemento-icon'/>
                    </motion.div>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay:1.2 }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className='valoresagregados-elemento-text'>
                        Actividades extracurriculares
                    </motion.p>
                </div>
        </motion.div>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
                visible: { y:0, opacity: 1 },
                hidden: { y:-20, opacity: 0 }
            }}
            className='valoresagregados-elemento-container'>
                <div className='valoresagregados-elemento'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay:0.4 }}
                        variants={{
                            visible: { y:0, opacity: 1 },
                            hidden: { y:-5, opacity: 0 }
                        }}>
                            <CloudSun className='valoresagregados-elemento-icon'/>
                    </motion.div>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay:1.2 }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className='valoresagregados-elemento-text'>
                        Formación integral
                    </motion.p>
                </div>
        </motion.div>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
                visible: { y:0, opacity: 1 },
                hidden: { y:-20, opacity: 0 }
            }}
            className='valoresagregados-elemento-container'>
                <div className='valoresagregados-elemento'>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay:0.4 }}
                    variants={{
                        visible: { y:0, opacity: 1 },
                        hidden: { y:-5, opacity: 0 }
                    }}>
                        <Boxes className='valoresagregados-elemento-icon'/>
                    </motion.div>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay:1.2 }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                        className='valoresagregados-elemento-text'>
                        Pilares como el juego, arte, exploración del mundo y la literatura
                    </motion.p>
                </div>
        </motion.div>


      </div>
    )
  }
}
