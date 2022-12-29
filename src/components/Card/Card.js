import React, { Component } from 'react'
import { BoxArrowUpRight } from 'react-bootstrap-icons'
import "./Card.css"
import { motion } from 'framer-motion'

export default class Card extends Component {
    fondo = this.props.fondo
    render() {
        return (
        <motion.div
            className='nivel-container'
            style={{ backgroundImage: `url(${this.fondo})` }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
                visible: { y:0, opacity: 1 },
                hidden: { y:-20, opacity: 0 }
            }}>
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
                                    {this.props.titulo}
                                </div>
                        </motion.div>
                    <div className='nivel-container-content-description'>
                        {this.props.descripcion}
                        <br/>
                        <a href={this.props.link} target="_blank" rel='noreferrer'>
                        <br/>
                        <div>
                            <BoxArrowUpRight className='nivel-container-content-icon'/>
                        </div>
                        </a>
                    </div>

                </div>

        </motion.div>
        )
    }
}