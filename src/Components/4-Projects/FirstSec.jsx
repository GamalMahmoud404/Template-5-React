

import React from 'react';
import "./projects.css"
import { BrowserRouter } from 'react-router-dom';


function FirstSec() {

    let card = ["./images/photo/01.png", "./images/photo/02.png", "./images/photo/03.png", "./images/photo/04.png", "./images/photo/05.png", "./images/photo/01.png"]

    return (
        <div className='allDivImg row gap-4 justify-content-evenly '>

            {card.map((image, index) => (
                <div  key={index} className='allImgs'>
                    <img className='divImg' src={image} alt={`Image ${index + 1}`} />
                    <div className='divDivImg'>
                        <p className='p1-divImg'>Business startup</p>
                        <p className='p2-divImg'>Design & Development</p>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default FirstSec;





