import React from 'react';
import photo from '../photo.png'

const classes = 'personalData flexContainer'

function PersonalData(props) {
    return (
        <div className={classes}>
            <img className='personalPicture' alt="CV Owner" src={photo}/>
            <h1 className='personalDataName'>Lukas Schroll</h1>
            <p className='personalDataTitle'>Backend Software Engineer</p>
        </div>
    );
}



export default PersonalData;