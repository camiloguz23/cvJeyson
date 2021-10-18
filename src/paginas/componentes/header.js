import React from 'react';
//import foto from '../img/camilo.jpeg'



const Header = (props) => {

    const {palabra} = props
    return ( 
        <>
        <header>
            <h1>{palabra} Dev</h1>
            <div className="menu">
                <a href="/">Home</a>
                <a href="/about_me">About me</a>
            </div>
        </header>
        </>
     );
}
 
export default Header;