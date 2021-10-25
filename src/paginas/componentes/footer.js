import React from 'react';
import pdf from './documents/jeyson_CV.pdf'


const Footer = () => {
    return ( 
        <>
        <footer>
            <p>Jeyson Camilo Guzman Rico</p>
            <a href={pdf} download="CV_JEYSON">Dowload CV by Jeyson Guzman</a>
        </footer>
        </>
     );
}
 
export default Footer;