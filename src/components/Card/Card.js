import React, { Component } from 'react'
import { BoxArrowUpRight } from 'react-bootstrap-icons'
import "./Card.css"

export default class Card extends Component {
    fondo = this.props.fondo
    render() {
        return (
        <div className='nivel-container' style={{
            backgroundImage: `url(${this.fondo})`,
            }}
            >
                <div className='nivel-container-content'>
                    <div className='nivel-container-content-title'>{this.props.titulo}</div>
                    <div className='nivel-container-content-description'>
                        {this.props.descripcion}
                        <br/>
                        <a href="/estudiantes" target="_blank" rel='noreferrer'>
                        <br/>
                        <div>
                            <BoxArrowUpRight className='nivel-container-content-icon'/>
                        </div>
                        </a>
                    </div>

                </div>

        </div>
        )
    }
}