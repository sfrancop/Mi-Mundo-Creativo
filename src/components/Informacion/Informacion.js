import React, { Component } from 'react'
import "./Informacion.css"
import { Link } from 'react-router-dom'
import { ClipboardMinus } from 'react-bootstrap-icons'
import Nivel from '../Nivel/Nivel'

export default class Informacion extends Component {
  render() {
    return (
      <div className='informacion-container'>

        <p className='informacion-container-title'>Niveles</p>

        <div className='informacion-container-niveles'>
            <Nivel nivel="Caminadores" fondo="https://images.pexels.com/photos/6402526/pexels-photo-6402526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" edadInicial="1" edadFinal="2" descripcion="Lorem ipsum dolor sit amet, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Nivel nivel="Caminadores" fondo="https://images.pexels.com/photos/3418400/pexels-photo-3418400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" edadInicial="1" edadFinal="2" descripcion="Lorem ipsum dolor sit amet, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Nivel nivel="Caminadores" fondo="https://images.pexels.com/photos/3045825/pexels-photo-3045825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" edadInicial="1" edadFinal="2" descripcion="Lorem ipsum dolor sit amet, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Nivel nivel="Caminadores" fondo="https://images.pexels.com/photos/3109807/pexels-photo-3109807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" edadInicial="1" edadFinal="2" descripcion="Lorem ipsum dolor sit amet, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Nivel nivel="Caminadores" fondo="https://images.pexels.com/photos/3109821/pexels-photo-3109821.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" edadInicial="1" edadFinal="2" descripcion="Lorem ipsum dolor sit amet,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Nivel nivel="Caminadores" fondo="https://images.pexels.com/photos/3109808/pexels-photo-3109808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" edadInicial="1" edadFinal="2" descripcion="Lorem ipsum dolor sit amet, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>

        <div className='informacion-container-matricula'>
            <div className='informacion-container-content'>
                <p className='informacion-container-content-text'>Inscribe a tu hijo</p>
                <Link className='informacion-container-content-button-link' to="/inscripciones">
                <div className='informacion-container-content-button'>
                    <Link to="/inscripciones"><ClipboardMinus className='informacion-container-content-button-icon'/></Link>
                </div>
                </Link>
            </div>
        </div>

      </div>
    )
  }
}
