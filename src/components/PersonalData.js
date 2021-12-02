import React from 'react';
import photo from '../ressources/photo.png'
import ParticlesBg from "particles-bg";

const classes = 'personalData flexContainer'

function PersonalData() {
    return (
        <div className={classes}>
            <ParticlesBg type='cobweb' bg={true} color='#F0FFFF'/>
            <img className='personalPicture' alt="CV Owner" src={photo}/>
            <h1 className='personalDataName'>Lukas Schroll</h1>
            <p className='personalDataTitle'>Backend Software Engineer</p>
        </div>
    );
}



export default PersonalData;