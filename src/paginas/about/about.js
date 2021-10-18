import React, {useState} from 'react';
import Header from '../componentes/header';
import Lenguages from './componentes/languages';
import Project from './componentes/project';
import Footer from '../componentes/footer';



const About = () => {

    const [activo,indicador] = useState(false)
    
    return (  
        <>
        <Header palabra ="Camilo"/>
        <Lenguages mensaje = "Jeyson programming languages are HTML,CSS,Javascript,PHP,Python,SQL and frameworks as React JS, Flack also knowlegde in git and Github; he was use that programming languages for doing Webpages with databases connection"
        activo={activo} indicador={indicador}
        />
        <Project/>
        <Footer />

        </>
        
    );
}
 
export default About;