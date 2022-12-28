import React, { Component } from 'react'
import "./ValoresAgregados.css"
import {Balloon, Boxes, Building, CloudSun, People} from 'react-bootstrap-icons'

export default class ValoresAgregados extends Component {
  render() {
    return (
      <div className='valoresagregados'>

        <div className='valoresagregados-elemento-container'>
            <div className='valoresagregados-elemento'>
                <Building className='valoresagregados-elemento-icon'/>
                <p className='valoresagregados-elemento-text'>Instalaciones adecuadas y espacios de recreación</p>
            </div>
        </div>

        <div className='valoresagregados-elemento-container'>
            <div className='valoresagregados-elemento'>
                <People className='valoresagregados-elemento-icon'/>
                <p className='valoresagregados-elemento-text'>Grupos pequeños</p>
            </div>
        </div>

        <div className='valoresagregados-elemento-container'>
            <div className='valoresagregados-elemento'>
                <Balloon className='valoresagregados-elemento-icon'/>
                <p className='valoresagregados-elemento-text'>Actividades extracurriculares</p>
            </div>
        </div>

        <div className='valoresagregados-elemento-container'>
            <div className='valoresagregados-elemento'>
                <CloudSun className='valoresagregados-elemento-icon'/>
                <p className='valoresagregados-elemento-text'>formación integral</p>
            </div>
        </div>

        <div className='valoresagregados-elemento-container'>
            <div className='valoresagregados-elemento'>
                <Boxes className='valoresagregados-elemento-icon'/>
                <p className='valoresagregados-elemento-text'>Pilares como el juego, arte, exploración del mundo y la literatura</p>
            </div>
        </div>


      </div>
    )
  }
}
