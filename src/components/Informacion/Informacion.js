import React, { Component } from 'react'
import "./Informacion.css"
import { Link } from 'react-router-dom'
import { ClipboardMinus, Facebook, GeoAlt, Instagram, Telephone, Whatsapp } from 'react-bootstrap-icons'
import Nivel from '../Nivel/Nivel'

export default class Informacion extends Component {
  render() {
    return (

        <div className='informacion-container'>

        <p className='informacion-container-title'>Niveles</p>

        <div className='informacion-container-niveles'>
            <Nivel nivel="Caminadores" fondo="https://cdn.pixabay.com/photo/2019/03/03/20/23/background-4032775_960_720.png" edadInicial="1" edadFinal="2" unidadInicial="años" unidadFinal="años" descripcion="Lorem ipsum dolor sit amet, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Nivel nivel="Caminadores" fondo="https://cdn.pixabay.com/photo/2018/04/06/15/17/pattern-3296033_960_720.png" edadInicial="1" edadFinal="2" unidadInicial="años" unidadFinal="años" descripcion="Lorem ipsum dolor sit amet, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Nivel nivel="Caminadores" fondo="https://cdn.pixabay.com/photo/2021/11/22/10/14/floral-6816295_960_720.png" edadInicial="1" edadFinal="2" unidadInicial="años" unidadFinal="años" descripcion="Lorem ipsum dolor sit amet, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Nivel nivel="Caminadores" fondo="https://cdn.pixabay.com/photo/2022/05/02/16/17/pattern-7169974_960_720.png" edadInicial="1" edadFinal="2" unidadInicial="años" unidadFinal="años" descripcion="Lorem ipsum dolor sit amet, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Nivel nivel="Caminadores" fondo="https://cdn.pixabay.com/photo/2017/01/31/17/55/background-2025984_960_720.png" edadInicial="1" edadFinal="2"  unidadInicial="años" unidadFinal="años" descripcion="Lorem ipsum dolor sit amet,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Nivel nivel="Caminadores" fondo="https://cdn.pixabay.com/photo/2018/02/24/09/40/pattern-3177667_960_720.png" edadInicial="1" edadFinal="2" unidadInicial="años" unidadFinal="años" descripcion="Lorem ipsum dolor sit amet, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
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

        <p className='informacion-container-title'>Contactanos</p>

        <div className='informacion-container-contacto'>
    
            <div className='informacion-container-contacto-informacion'>
                <div className='informacion-container-contacto-informacion-line'>
                    <GeoAlt className='informacion-container-contacto-informacion-icon-location'/>
                    <p className='informacion-container-contacto-informacion-text'>Manzana A casa 18 barrio Maria Camila Sur</p>
                </div>
                <br/>
                <div className='informacion-container-contacto-informacion-line'>
                    <Telephone className='informacion-container-contacto-informacion-icon-number'/>
                    <p className='informacion-container-contacto-informacion-text'>3118816946</p>
                </div>
                <br/>
                <div className='informacion-container-contacto-informacion-icons'>
                    <a href='/' target="_blank" rel='noreferrer'><Facebook className='informacion-container-contacto-informacion-icon'/></a><br/>
                    <a href='/' target="_blank" rel='noreferrer'><Instagram className='informacion-container-contacto-informacion-icon'/></a><br/>
                    <a href='/' target="_blank" rel='noreferrer'><Whatsapp className='informacion-container-contacto-informacion-icon'/></a>
                </div>
            </div>

            <form className='informacion-container-contacto-form'>
                <input type="text" placeholder='Asunto'/><br/>
                <input type="email" placeholder='Correo'/><br/>
                <textarea placeholder='Mensaje'/><br/>
                <button>Enviar</button>
            </form>

        </div>

        <div>
            <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32397.80657231896!2d-73.27577993477473!3d10.466536145985492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab9fe3a84ee77%3A0x6c30e50d14fde4d3!2sJard%C3%ADn%20Infantil%20Mi%20Mundo%20Creativo!5e0!3m2!1ses-419!2sco!4v1671538926648!5m2!1ses-419!2sco" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    )
  }
}
