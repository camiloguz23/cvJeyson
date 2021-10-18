import React from 'react';

const Info = (props) => {

    const {messages,link,image_view,pages, used_view} = props
    
    return (  
        <>
        <div className = "info">
            <div>
                <img src={image_view} alt=" photo_project" />
                <div className="link_conte">
                    <p>{messages}</p>

                    <div>
                        <a href={link}>Code in Github</a>
                        {(pages === undefined)? null : <a href={pages}>link of page</a> }
                        
                    </div>
                    <p className="cerrar"><span onClick={() => {used_view(false)}}>Cerrar</span></p>
                    
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Info;