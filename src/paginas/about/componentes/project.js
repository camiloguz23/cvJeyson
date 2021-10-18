import React from 'react';
import Contect from './contenct';

const Project = () => {
    return (  
        <>
       
        <div className="contenedor_title">
            <h3  className="title_project">Projects</h3>
        </div>
        <div className="used_project">
            <Contect title = "Form in React"messages="The Form was created with React JS, where it can validate datas user that input and if the datas is correct, it going to show a message" link="https://github.com/camiloguz23/React-Formulario"
            image_one="https://i.ibb.co/J5nyBZ2/formulario-react.png"
            pages="https://camiloguz23.github.io/ReactFormulario/"
             />
            <Contect title="piedra,papel y tijera"
                messages="This game was created in Javascript and used DOM,"
                link="https://github.com/camiloguz23/juegoPPT"
                image_one = "https://i.ibb.co/48kLnwK/PPT.png"
                pages="https://camiloguz23.github.io/juegoPPT/"
            />
            <Contect title="Pig game" 
                messages="This is game for two players where the winner is who complete first doing the sum of the points of games, it playing with dices"
                link = "https://github.com/camiloguz23/juego-de-pig-game"
                image_one="https://i.ibb.co/3fxgFtv/pig-game.png"
                pages="https://camiloguz23.github.io/juego-de-pig-game/"
            />

            <Contect title="ALICE"
                messages="Is a project for SENA, the project was team working, we used programming languages like PHP for backend, Javascript, HTML, css and git for to work in team"
                link="https://github.com/camiloguz23/Alice"
            />

        </div>
        </>
    );
}
 
export default Project;