import React, { Component } from 'react'
import "./Nivel.css"

export default class Nivel extends Component {
    fondo = this.props.fondo
    render() {
        return (
        <div className='nivel-container' style={{
            backgroundImage: `url(${this.fondo})`,
            }}
            >

                <div className='nivel-container-content'>
                    <div className='nivel-container-content-title'>{this.props.nivel}</div>
                    <div className='nivel-container-content-description'>
                    <br/>
                        {this.props.descripcion}
                        <br/>
                        <br/>
                        De {this.props.edadInicial} a {this.props.edadFinal} años
                    </div>
                </div>

        </div>
        )
    }
}
