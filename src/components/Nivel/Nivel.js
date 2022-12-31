import React, { Component } from 'react'
import "./Nivel.css"
import { motion } from 'framer-motion'

export default class Nivel extends Component {
    fondo = this.props.fondo
    render() {
        return (
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                    visible: { y:0, opacity: 1 },
                    hidden: { y:-20, opacity: 0 }
                }}
                className='nivel-container'
                style={{ backgroundImage: `url(${this.fondo})`, width:"100%"}}>
                    <div className='nivel-container-content'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay:0.8 }}
                            variants={{
                                visible: { opacity: 1 },
                                hidden: { opacity: 0 }
                            }}>
                                <div className='nivel-container-content-title'>
                                    {this.props.nivel}
                                </div>
                        </motion.div>
                        <div className='nivel-container-content-description'>
                        <br/>
                            {this.props.descripcion}
                            <br/>
                            <br/>
                            {this.props.edad}
                        </div>
                    </div>
            </motion.div>
        )
    }
}