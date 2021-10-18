import React, {useState}from 'react';
import Info from './info_project';


const Contect = (props) => {
    const [view,used_view] = useState(false)
    const {title,messages,link, image_one, pages} = props

    let info;

    if (view) {
        info = <Info messages ={messages} link={link} image_view={image_one} pages={pages} used_view={used_view}/>
    } else {
        info = null
    }

    return ( 
        <>
        <div className="elements" onClick={() => used_view(true)}>
            <div className="ele_title" >
                <h3>{title}</h3>
            </div>
        </div>
        {info}
        </>
     );
}
 
export default Contect;