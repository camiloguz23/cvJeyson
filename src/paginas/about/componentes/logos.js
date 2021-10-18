import React from 'react';

const Logo = (props) => {
    const {url,name} = props
    return ( 
        <>
        <div className="content_logo">
            <img src={url} alt={name} width="150px"></img>
            
        </div>
        </>
     );
}
 
export default Logo;