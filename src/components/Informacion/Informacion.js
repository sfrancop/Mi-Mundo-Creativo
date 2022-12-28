import React, { useState, useEffect } from 'react'
import "./Informacion.css"
import { Link } from 'react-router-dom'
import { ClipboardMinus, Envelope, Facebook, GeoAlt, Telephone, Whatsapp } from 'react-bootstrap-icons'
import Nivel from '../Nivel/Nivel'
import img_1 from "../../assets/img_1.jpg"
import img_2 from "../../assets/img_2.jpg"
import img_3 from "../../assets/img_3.jpg"
import img_4 from "../../assets/img_4.jpg"
import img_5 from "../../assets/img_5.jpg"
import img_6 from "../../assets/img_6.jpg"

export default function Informacion() {

    const images = [img_1, img_2, img_3, img_4, img_5, img_6];
    const [selectedIndex, setSelectIndex] = useState(0);
    const [selectedImage, setSelectImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            selectNewImgae(images, true)
        }, 4000);
        return () => clearInterval(interval)
    })

    const selectNewImgae = (images, next=true ) => {
        const condition = next ? selectedIndex < images.length-1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1: 0): condition ? selectedIndex -1: images.length - 1;
        setSelectImage(images[nextIndex]);
        setSelectIndex(nextIndex);
        var imagen = document.getElementById("imagen")
        imagen.removeChild(imagen.firstChild)
        var hijo = document.createElement("img")
        hijo.className = 'informacion-container-carrusel-imagen'
        hijo.src = selectedImage
        imagen.appendChild(hijo)
        console.log(nextIndex)
    }

    return (
        <div className='informacion-container'>

        <div className='informacion-container-matricula'>
            <div className='informacion-container-content'>
                <p className='informacion-container-content-text'>Inscribe a tu hijo</p>
                <Link className='informacion-container-content-button-link' to="/aspirantes">
                <div className='informacion-container-content-button'>
                    <Link to="/aspirantes"><ClipboardMinus className='informacion-container-content-button-icon'/></Link>
                </div>
                </Link>
            </div>
        </div>

        <p className='informacion-container-title'>Galeria</p>

        <div className='informacion-container-carrusel'>
            <div id='imagen' className='informacion-container-carrusel-container'>
                <img className='informacion-container-carrusel-imagen' src={selectedImage} alt="slide"></img>
            </div>
        </div>

        <p className='informacion-container-title'>Grados</p>

        <div className='informacion-container-niveles'>
            <Nivel nivel="Caminadores" fondo="https://cdn.pixabay.com/photo/2019/03/03/20/23/background-4032775_960_720.png" edad="Desde los 12 hasta los 20 meses" descripcion="Desarrollo en las áreas emocional, social, física, cognitiva, y sensorio motor de acuerdo a su edad. El desarrollo del cerebro permite que muchos movimientos sean automáticos." />
            <Nivel nivel="Párvulos" fondo="https://cdn.pixabay.com/photo/2018/04/06/15/17/pattern-3296033_960_720.png" edad="Desde los 2 años" descripcion="Los niños serán capaces de seguir instrucciones de dos o tres pasos, ordenar objetos por su forma o color, imitar las acciones de los adultos y compañeros de juego, y expresar una amplia variedad de emociones." />
            <Nivel nivel="Prejardín" fondo="https://cdn.pixabay.com/photo/2021/11/22/10/14/floral-6816295_960_720.png" edad="Desde los 3 años" descripcion="Desarrollo en las áreas sensorial, motor, lenguaje, afectivo, social y cognitiva. Se contribuye al interés por diferencias de sexos y empieza la exploración para saber cuál les corresponde a ellos." />
            <Nivel nivel="Jardín" fondo="https://cdn.pixabay.com/photo/2022/05/02/16/17/pattern-7169974_960_720.png" edad="Desde los 4 años" descripcion="Desarrollo del vocabulario, comprensión, la conciencia del mundo que los rodea, parte cognitiva, lenguaje y socio afectiva. Comenzarán a entender y comárar conceptos." />
            <Nivel nivel="Transición" fondo="https://cdn.pixabay.com/photo/2017/01/31/17/55/background-2025984_960_720.png" edad="Desde los 5 años" descripcion="Desarrollo en el lenguaje, la escritura, parte afectiva. Empezarán a escribir su nombre, las vocales, palabras sencillas e incluso a escribir palabras cortas en función de los sonidos vistos." />
            <Nivel nivel="Primero" fondo="https://cdn.pixabay.com/photo/2018/02/24/09/40/pattern-3177667_960_720.png" edad="Desde los 6 años" descripcion="Desarrollo en la concentración de forma prolongada. El lenguaje será la base del aprendizaje, se busca una pronunciación clara y con frases complejas. Empezarán a leer de forma independiente." />
        </div>

        <p className='informacion-container-title'>Contáctanos</p>

        <div className='informacion-container-contacto'>

            <div className='informacion-container-contacto-informacion'>
                <p className='informacion-text'>Horarios de atención: lunes a viernes de 8:00AM a 12:00AM y de 8:00PM a 6:00PM</p>
                <div className='informacion-container-contacto-informacion-line'>
                    <GeoAlt className='informacion-container-contacto-informacion-icon-location'/>
                    <p className='informacion-container-contacto-informacion-text'>Manzana A casa 18 barrio Maria Camila Sur</p>
                </div>
                <br/>
                <div className='informacion-container-contacto-informacion-line'>
                    <Telephone className='informacion-container-contacto-informacion-icon-number'/>
                    <p className='informacion-container-contacto-informacion-text'>3118816946 - 605884200</p>
                </div>
                <br/>
                <div className='informacion-container-contacto-informacion-line'>
                    <Envelope className='informacion-container-contacto-informacion-icon-number'/>
                    <p className='informacion-container-contacto-informacion-text'>jardinmimundocreativo@gmail.com</p>
                </div>
                <br/>
                <div className='informacion-container-contacto-informacion-icons'>
                    <a href='/' target="_blank" rel='noreferrer'><Facebook className='informacion-container-contacto-informacion-icon'/></a><br/>
                    <a href='https://api.whatsapp.com/send?phone=573118816946' target="_blank" rel='noreferrer'><Whatsapp className='informacion-container-contacto-informacion-icon'/></a>
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
