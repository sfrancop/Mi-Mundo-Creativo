import React, { Component } from 'react'
import "./Nosotros.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { ChatHeart, CloudSun, Eye, Lightning } from 'react-bootstrap-icons'

export default class Nosotros extends Component {
  render() {
    return (
      <div className='nosotros-container'>
        <Navbar/>

        <p className='informacion-container-title'>Nosotros</p>

        <div className='nosotros-container-row-1'>
            <div className='nosotros-container-leftcolumn-1'>
                <p className='nosotros-title-1'>Misión</p>
                <p className='nosotros-text'>
                    El Jardín Infantil Mi Mundo Creativo tiene como 
                    finalidad brindarle a la comunidad un servicio
                    indóneo y de calidad para los niños después de
                    los 3 meses a los 6 años cuidando y velando
                    por su proceso de formación integral 
                    destacando los aspectos de la expresión corporal y
                    la lúdica estimulando su creatividad e 
                    imaginación a través de los pilares como el 
                    juego, el arte la literatura y la exploración 
                    del mundo.
                </p>
            </div>
            <div className='nosotros-container-rightcolumn-1'>
                <div className='nosotros-icon-1'><CloudSun/></div>
            </div>
        </div>

        <div className='nosotros-container-row-2'>
        <div className='nosotros-container-leftcolumn-2'>
                <div className='nosotros-icon-2'><Eye/></div>
            </div>
            <div className='nosotros-container-leftcolumn-2'>
                <p className='nosotros-title-2'>Visión</p>
                <p className='nosotros-text'>
                    El Jardín Infantil Mi Mundo Creativo tiene como 
                    propisto darse a conocer ante la comunidad, 
                    por su trabajo con la población infantil, 
                    destacandose por el buen servicio en la 
                    atención y formación de los niños, así 
                    aumentando su estructura física y aumento en la 
                    cantidad de grados.
                </p>
            </div>
        </div>

        <div className='nosotros-container-row-1'>
            <div className='nosotros-container-leftcolumn-1'>
                <p className='nosotros-title-3'>Filosofía</p>
                <p className='nosotros-text'>
                El juego y la exploración de las emociones y las 
                expresiones artísticas como medio de aprendizaje y 
                la construcción de su formación de su ser niño.
                </p>
            </div>
            <div className='nosotros-container-rightcolumn-1'>
                <div className='nosotros-icon-3'><Lightning/></div>
            </div>
        </div>

        <div className='nosotros-container-row-2'>
        <div className='nosotros-container-leftcolumn-2'>
                <div className='nosotros-icon-4'><ChatHeart/></div>
            </div>
            <div className='nosotros-container-leftcolumn-2'>
                <p className='nosotros-title-4'>Lema</p>
                <p className='nosotros-text'>
                “Educación con valores y manejo de las emociones 
                para la vida.”
                </p>
            </div>
        </div>

        <Footer/>
      </div>
    )
  }
}
