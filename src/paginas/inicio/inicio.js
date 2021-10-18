import React from 'react';
import Header from '../componentes/header';
import video from '../img/video.mp4'
import Footer from '../componentes/footer';

const Inicio = () => {
    return (
        <>
        <Header palabra = "Jeyson"/>
        <div className="video">
            <video  autoPlay  loop  muted >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
        <div className="fondo_negro">
            <p>Hello...</p>
            <p>My name is Jeyson Camilo</p>
            <p>I am frontend developer</p>
       </div> 
       <Footer />
       </>
    )
}
 
export default Inicio;